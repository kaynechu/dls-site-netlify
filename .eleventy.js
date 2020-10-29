module.exports = function (eleventyConfig) {
  // Support file formats
  eleventyConfig.setTemplateFormats([
      "md",
      "jpg",
      "png",
      "svg",
      "ico"
    ]);
  // Copy the css folder
  eleventyConfig.addPassthroughCopy('css');
  // Copy the js folder
  eleventyConfig.addPassthroughCopy('js');
  return {
      passthroughFileCopy: true
  };
};

