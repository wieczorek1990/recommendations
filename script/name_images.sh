#!/bin/bash
dir="$1"
export PATH=$PATH:~/Pobrane/webp/bin
for file in "$dir"/*
do
  vwebp "$file"
  echo 'Name:'
  read name
  if [ -z "$name" ]
  then
    continue
  else
    mv "$file" "$name"
  fi
done
