'use strict';

module.exports = function (movieString) {

  var baseName = movieString.replace(/\.(avi|mkv|mpeg|mpg|mov|mp4)/i, '');
  var movie = baseName.match(/(.*?)(dvdrip|xvid| cd[0-9]|dvdscr|brrip|divx|S[0-9]{1,3}E[0-9]{1,3}|Season[\s,0-9]{1,4}|[\{\(\[]?[0-9]{4}).*/i);

  if (movie && movie[1]) {
    movie = movie[1].replace(/\./g, ' ').trim();
  } else {
    movie = baseName;
  }

  return movie;

};
