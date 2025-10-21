module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/pdf");
  
  
  eleventyConfig.setServerOptions({
    middleware: [
        function (req, res, next) {
            if (req.statusCode === 404) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(require("fs").readFileSync("_site/404.html"));
            } else {
                next();
            }
        }
    ]
});

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

