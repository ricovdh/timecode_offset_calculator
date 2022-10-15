!#/bin/bash

clear

mkdir /Applications/Timecode\ Offset\ Calculator
cd /Applications/Timecode\ Offset\ Calculator
curl -LO https://github.com/ricovdh/timecode_offset_calculator/releases/download/beta/toc-0.1.zip
unzip toc-0.1.zip
rm toc-0.1.zip
cp tc_calc.js TC\ Offset\ Calculator
clear
