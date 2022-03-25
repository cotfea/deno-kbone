export default {
  "origin": "https://test.miniprogram.com",
  "entry": "/",
  "router": {
    "home": [
      {
        "regexp": "^(?:\\/(home|index))?(?:\\/)?$",
        "options": "i"
      },
      {
        "regexp": "^\\/index\\.html(?:\\/)?$",
        "options": "i"
      },
      {
        "regexp": "^\\/test\\/(home|index)(?:\\/)?$",
        "options": "i"
      }
    ],
    "other": [
      {
        "regexp": "^\\/test\\/list\\/([^\\/]+?)(?:\\/)?$",
        "options": "i"
      },
      {
        "regexp": "^\\/test\\/detail\\/([^\\/]+?)(?:\\/)?$",
        "options": "i"
      }
    ]
  },
  "generate": {
    "worker": "common/workers"
  },
  "runtime": {
    "subpackagesMap": {},
    "tabBarMap": {},
    "usingComponents": {}
  },
  "pages": {
    "index": {},
    "log": {}
  },
  "redirect": {
    "notFound": "home",
    "accessDenied": "home"
  },
  "optimization": {
    "domSubTreeLevel": 10,
    "elementMultiplexing": true,
    "textMultiplexing": true,
    "commentMultiplexing": true,
    "domExtendMultiplexing": true,
    "styleValueReduce": 5000,
    "attrValueReduce": 5000
  }
}