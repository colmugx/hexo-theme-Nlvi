import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

export default ['banderole', 'balance'].map(name => ({
  input: `src/${name}.js`,
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    uglify({
      compress: {
        pure_getters: true
      },
      output: {
        comments: false
      },
    }, minify)
  ],
  output: [
    {
      file: `../scheme/${name}.js`,
      name: 'Nlvi',
      format: 'umd'
    }
  ]
}))
