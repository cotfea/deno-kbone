import { createSignal, onCleanup } from "https://cdn.skypack.dev/solid-js"
import { render } from "https://cdn.skypack.dev/solid-js/web"
import h from "https://cdn.skypack.dev/solid-js/h"

import html from './htm.js'

export default {
  createSignal
, onCleanup
, render
, html: html(h)
}
