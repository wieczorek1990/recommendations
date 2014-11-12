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

Handlebars.registerHelper('ifShort', function (val, options) {
    var many = val.split(/\.|!|\?/).length - 1 > 1;
    var long = val.length > 60;
    return !many && !long ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('link', function (val, platform, link) {
    switch (platform) {
        case 'android':
            return 'https://play.google.com/store/apps/details?id=' + val;
        case 'platforms':
            return link;
    }
});

Handlebars.registerHelper('img', function (val, platform) {
    return './img/{platform}/{val}.webp'.supplant({
        platform: platform,
        val: val
    });
});

Handlebars.registerHelper('col', function (val) {
    return 'col-lg-' + 12 / val;
});

Handlebars.registerHelper('size', function (platform) {
    var base = 170;
    return platform == 'platforms' ? base * 1.5 : base;
});

Handlebars.registerHelper('href', function (platform) {
    if (platform == 'platforms') {
        return '#';
    }
    return '#' + platform;
});

Handlebars.registerHelper("debug", function (opt) {
    console.log(opt);
    console.log(this);
});

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
    var platform = $('#recommendations').data('platform');
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
            $('#recommendations').html('<h2 class="text-center">Nothing here yet</h2>')
            spinner.stop();
        });
    $('.lead').text(platforms[platform].lead);
}

$(document).ready(function () {
    $.getJSON('./js/platforms.json', function (platforms) {
        var hash = window.location.hash.substring(1);
        var platform = hash == '' ? 'platforms' : hash;
        $('#recommendations').data('platform', platform);
        platforms = $.extend({platforms: {title: 'Home', lead: 'These are the software platforms I use'}}, platforms);
        platforms[platform].isActive = true;
        $('.masthead').html(Handlebars.templates.nav({links: platforms}));
        $('.nav a').click(function () {
            $('.nav li.active').removeClass('active');
            var target = $(this);
            target.parent().addClass('active');
            var platform = target.data('platform');
            $('#recommendations').data('platform', platform);
            load(platforms);
        });
        load(platforms);
    });
});
