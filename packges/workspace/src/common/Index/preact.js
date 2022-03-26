import lib from '../../lib/preact.js'

export default (window, document) => {

const {
  render, html
} = lib(window, document)

const App = () => html`<h1>Hello World!!!</h1>`

return {
  App: App()
, render
}

}
