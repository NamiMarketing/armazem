module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/pdf");
  
  
eleventyConfig.setServerOptions({
  fallback: "_site/404.html"
});

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

