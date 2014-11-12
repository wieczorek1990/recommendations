// Allows to scrap images from Google Play and Chrome store as well as normal images served over http

var https = require('https');
var fs = require('fs');
var cheerio = require('cheerio');

function run(funcs, args) {
    var i = 0;
    var recursive = function () {
        funcs[i](function () {
            i++;
            if (i < funcs.length)
                recursive();
        }, args[i]);
    };
    recursive();
}

function url(items, item, platform) {
    switch (platform) {
        case 'android':
            return 'https://play.google.com/store/apps/details?id=' + item;
        case 'chrome':
            return 'https://chrome.google.com/webstore/detail/' + item + '/' + items[item].id;
        case 'debian':
        case 'windows':
            return items[item].image;
        default:
            console.error('Wrong platform in url');
    }
}

function selector(platform) {
    var selectors = {
        'android': '.cover-container > img.cover-image',
        'chrome': 'meta[property="og:image"]'
    };
    return selectors[platform];
}

function attribute(platform) {
    var attributes = {
        'android': 'src',
        'chrome': 'content'
    };
    return attributes[platform];
}

function isGoogle(platform) {
    var isScrapper = {
        'android': true,
        'chrome': true,
        'debian': false,
        'windows': false
    };
    return isScrapper[platform];
}

function webp_url(webp) {
    return webp + '-rw';
}

function download(url, encoding, callback) {
    https.get(url, function (res) {
        res.setEncoding(encoding);
        var buffer = '';
        res.on('data', function (chunk) {
            buffer += chunk;
        });
        res.on('end', function () {
            callback(buffer);
        })
    });
}

function downloadImage(url, platform, item, extension, callback) {
    download(url, 'binary', function (image) {
        fs.writeFile('../img/' + platform + '/' + item + '.' + extension, image, 'binary', function (err) {
            if (err) throw err;
            console.log('Downloaded image for: ' + item);
            callback();
        });
    });
}

function scrap(callback, args) {
    var platform = args.platform;
    var item = args.item;
    var url = args.url;
    var isGoogle = args.isGoogle;
    if (isGoogle) {
        var selector = args.selector;
        var attribute = args.attribute;
        download(url, 'utf8', function (html) {
            console.log('Retrieved html for: ' + item);
            var $ = cheerio.load(html);
            var $img = $(selector);
            var src = $img.attr(attribute);
            var img_url = webp_url(src);
            downloadImage(img_url, platform, item, 'webp', callback);
        });
    } else {
        if (url) {
            var extension = url.split('.').pop();
            downloadImage(url, platform, item, extension, callback);
        }
    }
}

//var platforms = ['android', 'chrome', 'debian', 'windows'];
var platforms = ['android', 'chrome'];
for (var index in platforms) {
    var platform = platforms[index];
    var items = require('../js/' + platform + '.json');
    var downloads = [];
    for (var item in items) {
        downloads.push(scrap)
    }
    var keys = Object.keys(items);
    var args = {};
    for (var index in keys) {
        var item = keys[index];
        args[index] = {
            platform: platform,
            item: item,
            url: url(items, item, platform),
            selector: selector(platform),
            attribute: attribute(platform),
            isGoogle: isGoogle(platform)
        }
    }
    run(downloads, args);
}
