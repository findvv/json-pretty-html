require('json-pretty-html/style.css');
var jsonPrettyHtml = require("json-pretty-html");
var json = {
  "id": 2,
  "name": "An ice sculpture",
  "price": 12.50,
  "tags": ["cold", "ice"],
  "dimensions": {
    "length": 7.0,
    "width": 12.0,
    "height": 9.5
  },
  "warehouseLocation": {
    "latitude": -78.75,
    "longitude": 20.4
  }
};
jsonPrettyHtml.default(json, json.dimensions);