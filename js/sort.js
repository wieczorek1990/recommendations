function sortApps(json) {
    var apps = [];
    for (var name in json) {
        app = json[name];
        apps.push([name, app.title, app.description]);
    }
    apps.sort(function (a, b) {
        return a[1].toLowerCase().localeCompare(b[1].toLowerCase());
    });
    result = {};
    for (var i in apps) {
        var app = apps[i];
        result[app[0]] = {
            "title": app[1],
            "description": app[2]
        }
    }
    return result;
}

var json = JSON.stringify(sortApps(require('./apps.json')));
console.log(json);
