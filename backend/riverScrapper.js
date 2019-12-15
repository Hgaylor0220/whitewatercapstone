//SCRAP INFORMATION VIA STATIC SITE WAY

// Is it possible to create a dictionary to assign the station numbers to rivers?

// pl-scraper.js

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://waterdata.usgs.gov/or/nwis/uv/?site_no=14142500&PARAmeter_cd=00065,00060';
//set up a dictionary for the river names and station number
// per the users choice, search the river name on the first url site then return that to the scrapper and replace .



axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const riverContainerSearch = $('.statsTableContainer > td');
        const riverSearch = [];

        riverContainerSearch.each(function () {
            const riverName = $(this).find('body > h2').text();
            const dateTime = $(this).find('.stationContainer > text').text();
            const gageCfs = $(this).find('.highlight2').text();
            const gageFt = $(this).find('.stationContainer').text();

            riverSearch.push({
                riverName: riverName,
                dateTime: dateTime,
                gageCfs: gageCfs,
                gageFt: gageFt
            });
        });

        console.log(topPremierLeagueScorers);
    })
    .catch(console.error);


// TRYING TO SCRAP INFO ASSUMING DYNAMIC SITE -- was only able to return array. Not sure if I am targeting the right search querey.

// const cheerio = require('cheerio');
// const puppeteer = require('puppeteer');

// const url = 'https://waterdata.usgs.gov/wa/nwis/current/?type=flow';

// puppeteer
//     .launch()
//     .then(browser => browser.newPage())
//     .then(page => {
//         return page.goto(url).then(function () {
//             return page.content();
//         });
//     })
//     .then(html => {
//         const $ = cheerio.load(html);
//         const riverSearch = [];
//         $('a[href="/wa/nwis/uv/?site_no=14128895-143462600&amp;PARAmeter_cd=00060,00065"] > td').each(function () {
//             riverSearch.push({
//                 title: $(this).text(),
//             });
//         });

//         console.log(riverSearch);
//     })
//     .catch(console.error);



        
