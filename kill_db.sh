#!/bin/zsh

# Get the PID from the lsof command
PID=$(lsof -i :5001 -t)

# Check if PID is not empty
if [ -n "$PID" ]; then
  # Kill the process with the obtained PID
  kill -9 $PID
  echo "Process $PID killed."
else
  echo "No process is listening on port 5001."
fi
