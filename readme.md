# movie-title [![Build Status](https://secure.travis-ci.org/danielhusar/movie-title.svg?branch=master)](http://travis-ci.org/danielhusar/movie-title)

Get the movie and tv show title from the strings like:

```
  Einstein.And.Eddington.2008.DVDRip.XviD.avi
  Edge of Tomorrow (2014) 720pTS-2-DVD DD2.0 NL Subs NLU002
  Rio 2 (2014) DD2.0 NL Subs HDTS-2-DVD-NLU002
  The.Flash.2014.S01E01.720p.WEB.x264-NOGRP[rartv]
  House of Cards Season 1 Complete.720p.BRrip.sujaidr (pimprg)
```

## Install

```bash
npm install --save movie-title
```

## Example

```javascript
var movieTitle = require('movie-title');
movieTitle('Einstein.And.Eddington.2008.DVDRip.XviD.avi');
```

## options

#### movie

Type: `String`  
Default: ''

Movie string to search for a title


## License

MIT © [Daniel Husar](https://github.com/danielhusar)
