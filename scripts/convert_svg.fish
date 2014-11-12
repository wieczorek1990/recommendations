#!/usr/bin/env fish
# Converts svg to webp

set script (status -f)
set dir (dirname $script)
for platform in platforms debian windows
  cd $dir/../img/$platform
  for file in *.svg
    set base (basename $file .svg)
    set png {$base}.png
    inkscape -z -e $png $file
    cwebp $png -o {$base}.webp
    rm $png
  end
end
