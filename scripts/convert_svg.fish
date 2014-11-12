#!/usr/bin/env fish
set script (status -f)
set dir (dirname $script)
cd $dir/../img/platforms
for file in *.svg
  set base (basename $file .svg)
  set png {$base}.png
  inkscape -z -e $png -w 255 -h 255 $file
  cwebp $png -o {$base}.webp
  rm $png
end
