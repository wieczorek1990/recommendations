#!/usr/bin/env fish
# Converts png to webp

set script (status -f)
set dir (dirname $script)
for platform in debian windows
  cd $dir/../img/$platform
  for file in *.png
    set base (basename $file .png)
    cwebp -q 100 $file -o {$base}.webp
  end
end
