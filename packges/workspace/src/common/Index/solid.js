import lib from '../../lib/solid.js'

export default (window, document) => {

const {
  createSignal, onCleanup
, render, html
} = lib(window, document)

const App = () => {

  const [count, setCount] = createSignal(0)
  const timer = setInterval(() => setCount(count() + 1), 1000)
  onCleanup(() => clearInterval(timer))
  return html`<div>${count}</div>`
}

return {
  App
, render
}

}
