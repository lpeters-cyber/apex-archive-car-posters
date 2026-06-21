@echo off
set "SITE_DIR=%~dp0"
set "NODE_EXE=C:\Users\Lesli\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if not exist "%NODE_EXE%" (
  echo The local website runtime could not be found.
  echo Please return to Codex so it can be repaired.
  pause
  exit /b 1
)

powershell -NoProfile -WindowStyle Hidden -Command "Start-Process -FilePath '%NODE_EXE%' -ArgumentList 'server.mjs' -WorkingDirectory '%SITE_DIR%' -WindowStyle Hidden"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4173"
exit /b 0
