#!/bin/bash
cd "$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
handlebars js/app.handlebars -f js/app.compiled.js
