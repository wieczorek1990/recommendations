Handlebars.registerHelper('ifShort', function (val, options) {
    var many = val.split(/\.|!|\?/).length - 1 > 1;
    var long = val.length > 60;
    return !many && !long ? options.fn(this) : options.inverse(this)
});

Handlebars.registerHelper('link', function (val) {
    return 'https://play.google.com/store/apps/details?id=' + val
});

Handlebars.registerHelper('img', function (val) {
    return './img/' + val
});

var apps = $.getJSON('./js/apps.json', function (apps) {
    var rows = [];
    var column = null;
    var i = 0;
    for (var appName in apps) {
        if (i % 3 == 0) {
            column = {}
        }
        column[appName] = apps[appName];
        if (i % 3 == 2) {
            rows.push(column);
            column = null;
        }
        i += 1;
    }
    if (column != null) {
        rows.push(column);
    }
    $('#apps').html(Handlebars.templates.app({rows: rows}));
    lastCols = $('.row:last > .col-lg-4');
    lastColsCount = lastCols.length;
    if (lastColsCount != 3) {
        offset = lastColsCount == 1 ? 4 : 2;
        className = 'col-lg-offset-' + offset;
        lastCols.first().addClass(className);
    }
});
