@echo off
setlocal
cd /d "%~dp0"

if not exist node_modules (
  echo Installation des dependances du site...
  call npm ci
  if errorlevel 1 exit /b %errorlevel%
)

echo Demarrage du site local avec les documents de refonte...
call npm run start:refonte

endlocal
