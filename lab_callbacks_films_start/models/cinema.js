const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function() {
  const titles = this.films.map( x => x.title)
  return titles
}



module.exports = Cinema;
