#!/usr/bin/env fish
# Compiles handlebars templates

set script (status -f)
set dir (dirname $script)
cd $dir/../js/
for file in item nav
    handlebars {$file}.handlebars -f {$file}.compiled.js
end
