@echo off
color 2
set /p "id=Enter bot TOKEN: "

echo|set /p="{" > botconfig.json
echo|set /p=""TOKEN": " >> botconfig.json
echo|set /p=""%id%"" >> botconfig.json
echo|set /p="}" >> botconfig.json

echo Bot has been successfully initialised!

pause