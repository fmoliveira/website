module.exports = function (eleventyConfig) {
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: extractExcerpt,
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
