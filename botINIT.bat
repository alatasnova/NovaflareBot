@echo off
set /p "id=Enter bot TOKEN: "

echo|set /p="{" > botconfig.json
echo|set /p=""TOKEN": " >> botconfig.json
echo|set /p=""%id%"" >> botconfig.json
echo|set /p="}" >> botconfig.json

pause