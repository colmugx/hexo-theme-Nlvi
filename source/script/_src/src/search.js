import { fromEvent, zip, from } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, debounceTime, withLatestFrom } from 'rxjs/operators'

export default function(path, inputId) {
  const result$ = ajax({
    url: path,
    responseType: 'xml'
  }).pipe(
    map(({ response }) => response),
    map(res => res.querySelectorAll('entry')),
    map(res => [...res].map(v => ({
      title: v.getElementsByTagName('title')[0].textContent,
      url: v.getElementsByTagName('url')[0].textContent,
      content: v.getElementsByTagName('content')[0].textContent,
    })))
  )

  const input$ = fromEvent(document.getElementById(inputId), 'input').pipe(
    debounceTime(500),
    map(({ target }) => target.value.trim())
  )

  const novalue$ = input$.pipe(
    map(v => !!v)
  )

  const output$ =  input$.pipe(
    withLatestFrom(result$),
    map(
      ([keyword, results]) => results
        .filter(({ title, content }) => title.indexOf(keyword) >= 0 || content.indexOf(keyword) >= 0)
        .map(obj => {
          const reg = new RegExp(`(${keyword})`, 'gi')
          const title = obj.title.replace(reg, '<strong class="search-keyword">$1</strong>')
          let content = obj.content.replace(/<[^>]+>/g, "")
          const index = content.indexOf(keyword)

          content = content
            .slice(index < 20 ? 0 : index - 20, index < 0 ? 100 : index + 80)
            .replace(reg, '<strong class="search-keyword">$1</strong>')
          return { ...obj, title, content }
        })
    ),
  )

  return zip(novalue$, output$).pipe(
    map(([exist, values]) => exist ? values : [])
  )
}
