'use strict';
var movieTitle = require('./index.js');
var assert = require('assert');

it('It should get the proper movie title', function () {
    assert.equal(movieTitle('Einstein.And.Eddington.2008.DVDRip.XviD.avi'), 'Einstein And Eddington');
    assert.equal(movieTitle('Edge of Tomorrow (2014) 720pTS-2-DVD DD2.0 NL Subs NLU002'), 'Edge of Tomorrow');
    assert.equal(movieTitle('Maleficent (2014) DD2.0 NL Subs TS2DVD-NLU002'), 'Maleficent');
    assert.equal(movieTitle('Rio 2 (2014) DD2.0 NL Subs HDTS-2-DVD-NLU002'), 'Rio 2');
    assert.equal(movieTitle('300, Rise of an Empire (2013)(dvd5)(Nl subs) WEBRIP SAM TBS'), '300, Rise of an Empire');
    assert.equal(movieTitle('countdown.to.zero.2010.xvid-submerge.avi'), 'countdown to zero');
    assert.equal(movieTitle('DrJn.2010.BRRip_mediafiremoviez.com.mkv'), 'DrJn');
    assert.equal(movieTitle('Nim\’s.Island[2008]DvDrip-aXXo.avi'), 'Nim\’s Island');
    assert.equal(movieTitle('Invictus.DVDSCR.xViD-xSCR.CD1.avi'), 'Invictus');
    assert.equal(movieTitle('20000 Leagues Under The Sea.avi'), '20000 Leagues Under The Sea');
    assert.equal(movieTitle('Across The Universe.MoZinRaT CD1.avi'), 'Across The Universe MoZinRaT');
    assert.equal(movieTitle('arranged.xvid-reserved.avi'), 'arranged');
});

it('It should get the proper tv show title', function () {
    assert.equal(movieTitle('The.Flash.2014.S01E01.720p.WEB.x264-NOGRP[rartv]'), 'The Flash');
    assert.equal(movieTitle('Suits.S03E03.COMPLETE.720p.HDTV.x264-PublicHD'), 'Suits');
    assert.equal(movieTitle('24 S09E10 720p HDTV X264-DIMENSION [eztv]'), '24');
    assert.equal(movieTitle('House of Cards Season 1 Complete.720p.BRrip.sujaidr (pimprg)'), 'House of Cards');
    assert.equal(movieTitle('House of Cards Season1 Complete.720p.BRrip.sujaidr (pimprg)'), 'House of Cards');
});
