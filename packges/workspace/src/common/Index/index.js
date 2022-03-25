import { createSignal, onCleanup } from "https://cdn.skypack.dev/solid-js"
import { render } from "https://cdn.skypack.dev/solid-js/web"
import h from "https://cdn.skypack.dev/solid-js/h"
import htm from 'https://esm.sh/htm'

const html = htm.bind(h)

const App = () => {
  const [count, setCount] = createSignal(0)
  const timer = setInterval(() => setCount(count() + 1), 1000)
  onCleanup(() => clearInterval(timer))
  return html`<div>${count}</div>`
}

const createApp = () => {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(App, container)
}

export default createApp
