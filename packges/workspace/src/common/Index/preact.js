import { render, h } from 'https://esm.sh/preact'
import htm from 'https://esm.sh/htm'

const html = htm.bind(h)

const createApp = () => {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(
    html`<h1>Hello World!!!<h1/>`
  , container
  )
}

export default createApp
