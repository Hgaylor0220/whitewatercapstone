
const axios = require('axios');

const url = 'https://waterdata.usgs.gov/wa/nwis/current/?type=flow';

axios(url)
    .then(response => {
        const html = response.data;
        const $ =cheerio.load(html);
        const alldata = $('tr');
        const riverInfo = [];

        alldata.each(function(){
            const riverName = $(this).find('&nbsp > td').text();
            const dateTime = $(this).find('PST > td').text();
            const riverName = $(this).find('&nbsp > td').text();
            const riverName = $(this).find('&nbsp > td').text();


        })
        console.log(alldata.length);
    })
    .catch(console.error);
