// Sorts json

function sortItemsByFirstField(json, fields) {
    var items = [];
    for (var name in json) {
        item = json[name];
        var array = [name];
        for (var index in fields) {
            var field = fields[index];
            array.push(item[field]);
        }
        items.push(array);
    }
    items.sort(function (a, b) {
        return a[1].toLowerCase().localeCompare(b[1].toLowerCase());
    });
    result = {};
    for (var i in items) {
        var item = items[i];
        var hash = {};
        var i = 1;
        for (var index in fields) {
            var field = fields[index];
            hash[field] = item[i];
            i += 1;
        }
        result[item[0]] = hash;
    }
    return result;
}
var platforms = {
    'android': ['title', 'description'],
    'chrome': ['title', 'description', 'id'],
    'debian': ['title', 'description', 'link', 'image'],
    'windows': ['title', 'description', 'link'],
    'platforms': ['title', 'description', 'link', 'lead']
};

for (var platform in platforms) {
    try {
        var file = require('../js/' + platform + '.json');
        var fields = platforms[platform];
        var json = JSON.stringify(sortItemsByFirstField(file, fields));
        console.log(platform + ': ' );
        console.log(json);
    } catch (err) {
        console.log(err.message);
        console.log(err.stack)
    }
}
