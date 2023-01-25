// sorting ascending based on title
// standard is the date.
// There is no easy api-method.
// https://github.com/11ty/eleventy/issues/411
module.exports = function(collection) {
  return collection
    .getFilteredByGlob(["./src/content/post/*.md", "./src/content/post/*.njk"]).sort((a,b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    })
}
