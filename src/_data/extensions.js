const fetch = require("node-fetch");

const MY_EXTENSIONS_URL =
  "https://gist.githubusercontent.com/fmoliveira/8bbbbecc8cbb35a0da3e66b52522318e/raw/extensions.json";

const MARKETPLACE_URL = "https://marketplace.visualstudio.com/items?itemName=";

module.exports = async function () {
  return fetch(MY_EXTENSIONS_URL)
    .then((response) => response.json())
    .then((extensions) =>
      extensions.map((extension) => ({
        name: extension.name,
        url: [MARKETPLACE_URL, extension.metadata.publisherId].join(""),
      }))
    );
};
