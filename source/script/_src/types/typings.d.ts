import Base from "../src/base"

export {}

declare global {
  interface Window {
    GLightbox: any
    app: Base
  }
}
