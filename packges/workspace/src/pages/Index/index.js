const mp = require('miniprogram-render')

import getBaseConfig from '../base.js'
import config from '../../config'
import Index from '../../common/Index/index.js'

// const App = (options) => {window.appOptions = options}

// const {
//   self 
// , HTMLElement
// , Element
// , Node
// , localStorage
// , sessionStorage 
// , navigator
// , history
// , location
// , performance
// , Image
// , CustomEvent
// , Event
// , requestAnimationFrame
// , cancelAnimationFrame
// , getComputedStyle
// , XMLHttpRequest
// , Worker
// , SharedWorker
// } = window

const init = (window, document) => {

  const createApp = Index(window, document)

  window.createApp =
    'undefined' != typeof wx
    ? () => { createApp(wx.getSystemInfoSync) }
    : createApp

}

const baseConfig = getBaseConfig(mp, config, init)

Component({
  ...baseConfig.base
, methods: {
    ...baseConfig.methods
  }
})
