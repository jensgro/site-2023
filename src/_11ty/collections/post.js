module.exports = function(collection) {
  return collection
    .getFilteredByGlob(["./src/content/post/*.md", "./src/content/post/*.njk"])
}
