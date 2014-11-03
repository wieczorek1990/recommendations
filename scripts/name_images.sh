#!/bin/bash
# Name images downloaded from saved "My Applications" Google Play website
# Please use google Play id's as names
# You can skip images by hitting enter
# You can leave vwebp by hitting esc
# If you have nodejs installed please use the scrap_images.js script intead
# Put you vwebp from https://developers.google.com/speed/webp/download into your PATH
# e.g. `export PATH=${PATH}:~/Downloads/libwebp/bin`

if [ "$#" -ne 1 ]
then
  echo 'Usage: bash name_images.sh images_directory'
fi
dir="$1"
cd "$dir"
for file in *
do
  vwebp "$file"
  echo 'Name:'
  read name
  if [ -z "$name" ]
  then
    continue
  else
    mv "$file" "${name}.webp"
  fi
done
