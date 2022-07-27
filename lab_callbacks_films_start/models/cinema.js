const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function() {
  const titles = this.films.map( x => x.title)
  return titles
};

Cinema.prototype.findTitle = function(title) {
  const result = this.films.filter((n) => title === n.title);
  return result[0]
};

Cinema.prototype.findByGenre = function(genre) {
  const result = this.films.filter((n) => genre === n.genre);
  return result
};

Cinema.prototype.findByYear = function(year) {
  const result = this.films.filter((n) => year === n.year);
  return result
};

Cinema.prototype.findByMinLength = function(time) {
  const result = this.films.filter((n) => time <= n.length);
  return result
};
module.exports = Cinema;
