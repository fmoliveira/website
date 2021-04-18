const getShareImage = require("@jlengstorf/get-share-image").default;

const meta = require("./src/_data/meta");

module.exports = function (eleventyConfig) {
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: extractExcerpt,
  });

  eleventyConfig.addFilter("defaultTitle", (title) => {
    return title?.length > 1 ? title : meta.defaultTitle;
  });

  eleventyConfig.addFilter("defaultDescription", (description) => {
    return description?.length > 1 ? description : meta.defaultDescription;
  });

  eleventyConfig.addFilter("defaultOgType", (ogType) => {
    return ogType?.length > 1 ? ogType : meta.defaultOgType;
  });

  eleventyConfig.addFilter("getSocialCard", (title, tagline) => {
    return getShareImage({
      title,
      tagline: "asdf",
      cloudName: "fmoliveira-dev",
      imagePublicID: "fmoliveira/social-card",
      version: "v1618437292",
      imageWidth: 1280,
      imageHeight: 650,
      // titleFont: "Merriweather",
      // taglineFont: "Merriweather",
      textColor: "e5e7eb",
    });
  });

  eleventyConfig.addFilter("sortByDate", (items = []) => {
    return items.sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

function extractExcerpt(file, options) {
  const excerpt = file.content
    .split("\n")
    .filter(Boolean)
    .slice(0, 1)
    .join(" ");
  file.data = { ...file.data, excerpt };
}
