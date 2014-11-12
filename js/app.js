if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(/{([^{}]*)}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}

if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

Handlebars.registerHelper('ifShort', function (string, options) {
    //var many = string.split(/\.|!|\?/).length - 1 > 1;
    var long = string.length > 70;
    return /*!many && */!long ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('ifImage', function (image, platform, options) {
    if (platform != 'debian') {
        return options.fn(this);
    } else if (image) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('link', function (item, platform, _this) {
    switch (platform) {
        case 'android':
            return 'https://play.google.com/store/apps/details?id=' + item;
        case 'chrome':
            return 'https://chrome.google.com/webstore/detail/' + item + '/' + _this.id;
        case 'platforms':
            return '#' + item;
        default:
            return _this.link;
    }
});

Handlebars.registerHelper('img', function (item, platform) {
    return './img/{0}/{1}.webp'.supplant([platform, item]);
});

Handlebars.registerHelper('col', function (colSize) {
    return 'col-lg-' + 12 / colSize;
});

Handlebars.registerHelper('size', function (platform) {
    return platform == 'platforms' ? 255 : 170;
});

Handlebars.registerHelper('href', function (platform) {
    if (platform == 'platforms') {
        return '#';
    }
    return '#' + platform;
});

Handlebars.registerHelper('go', function (platform) {
    if (platform == 'platforms') {
        return 'See recommendations »';
    }
    return 'Install »';
});

Handlebars.registerHelper("debug", function (arg) {
    console.log(arg);
    console.log(this);
});

function getPlatform() {
    var hash = window.location.hash.substring(1);
    return hash == '' ? 'platforms' : hash;
}

function toRows(data, rowSize) {
    var rows = [];
    var column = null;
    var i = 0;
    for (var name in data) {
        if (i % rowSize == 0) {
            column = {}
        }
        column[name] = data[name];
        if (i % rowSize == rowSize - 1) {
            rows.push(column);
            column = null;
        }
        i += 1;
    }
    if (column != null) {
        rows.push(column);
    }
    return rows;
}

function alignLast(colSize) {
    var colClass = Handlebars.helpers.col(colSize);
    var $lastCols = $('.row:last > .{0}'.format(colClass));
    var lastColsCount = $lastCols.length;
    if (lastColsCount != colSize) {
        var offset, center = false;
        switch (colSize) {
            case 2:
                offset = 3;
                break;
            case 3:
                offset = lastColsCount == 1 ? 4 : 2;
                break;
            case 4:
                switch (lastColsCount) {
                    case 1:
                        center = true;
                        break;
                    case 2:
                        offset = 3;
                        break;
                    case 3:
                        center = true;
                        break;
                }
                break;
            default:
                console.error('Wrong colSize in alignLast');
                break;
        }
        if (center) {
            var newClass = Handlebars.helpers.col(lastColsCount);
            var classes = [newClass, 'col-centered'].join(' ');
            $lastCols.addClass(classes).removeClass(colClass);
        } else {
            var className = 'col-lg-offset-' + offset;
            $lastCols.first().addClass(className);
        }
    }
}

function load(platforms) {
    var opts = {
        lines: 8,
        length: 8,
        width: 16,
        radius: 32,
        corners: 1.0,
        rotate: 0,
        trail: 64,
        speed: 2.0,
        drection: 1,
        shadow: true,
        hwaccel: true
    };
    var spinner = new Spinner(opts).spin($('body').get(0));
    var platform = getPlatform();
    var colSize = platform == 'platforms' ? 4 : 3;
    $.getJSON('./js/' + platform + '.json')
        .done(function (items) {
            $('#recommendations').html(Handlebars.templates.item({
                rows: toRows(items, colSize),
                platform: platform,
                colSize: colSize
            }));
            alignLast(colSize);
            spinner.stop();
        })
        .fail(function () {
            $('#recommendations').html('<h2 class="text-center">Nothing here yet</h2>');
            spinner.stop();
        });
    $('.lead').text(platforms[platform].lead);
}

function switchSite(platforms) {
    var href = Handlebars.helpers.href(getPlatform());
    $('.nav li.active').removeClass('active');
    var target = $('.nav a[href="' + href + '"]');
    target.parent().addClass('active');
    load(platforms);
}

$(document).ready(function () {
    $.getJSON('./js/platforms.json', function (platforms) {
        var platform = getPlatform();
        platforms = $.extend({platforms: {title: 'Home', lead: 'These are the software platforms I use'}}, platforms);
        platforms[platform].isActive = true;
        $('.masthead').html(Handlebars.templates.nav({links: platforms}));
        $(window).on('hashchange', function() {
            switchSite(platforms);
        });
        load(platforms);
    });
});
