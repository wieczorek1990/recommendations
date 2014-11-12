var https = require('https');
var fs = require('fs');
var cheerio = require('cheerio');

function run(funcs, args) {
    var i = 0;
    var recursive = function() {
        funcs[i](function() {
            i++;
            if (i < funcs.length)
                recursive();
        }, args[i]);
    };
    recursive();
}

function play_url(app) {
    return 'https://play.google.com/store/apps/details?id=' + app;
}

function webp_url(webp) {
    return webp + '-rw';
}

function download(url, encoding, callback) {
    https.get(url, function (res) {
        res.setEncoding(encoding);
        buffer = '';
        res.on('data', function (chunk) {
            buffer += chunk;
        });
        res.on('end', function () {
            callback(buffer);
        })
    });
}

function downloadImage(callback, app) {
    play = play_url(app);
    download(play, 'utf8', function (html) {
        console.log('Retrieved html for: ' + app);
        $ = cheerio.load(html);
        $img = $('.cover-container > img.cover-image');
        src = $img.attr('src');
        img = webp_url(src);
        download(img, 'binary', function (image) {
            fs.writeFile('../img/' + app + '.webp', image, 'binary', function (err) {
                if (err) throw err;
                console.log('Downloaded image for: ' + app);
                callback();
            });
        });
    });
}

var apps = require('../js/android.json');
var downloads = [];
for (var app in apps) {
    downloads.push(downloadImage)
}
run(downloads, Object.keys(apps));
