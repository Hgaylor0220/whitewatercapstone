
const rp = require('request-promise');
const url = 'https://waterdata.usgs.gov/or/nwis/uv/?site_no=14142500&PARAmeter_cd=00065,00060';

rp(url)
    .then(function (html) {
        console.log($(' .', html).text());
        // console.log($('.bday', html).text());
    })
    .catch(function (err) {
        //handle error
    });
    // going to attempt to parse through the data in a csv format