#!/bin/bash

update_daemon_log="/var/log/syna/update_daemon.log"

# Search for the last occurrence of "@Status"
line=$(grep "@Status\." $update_daemon_log | tail -1)

# Extract the string that comes after "@Status" on the same line
status=${line#*@Status.}

case $status in
  "RECEIVING")
    progress=15
    ;;
  "VALIDATING")
    progress=30
    ;;
  "VALIDATED")
    progress=45
    ;;
  "UPDATING")
    progress=60
    ;;
  "UPDATED")
    progress=75
    ;;
  "POSTPROCESSING")
    progress=90
    ;;
  "POSTPROCESSED")
    progress=100
    ;;
  *)
    progress=0  # default value if status is not recognized
    ;;
esac

echo "Content-type: text/plain"
echo ""
echo "$progress"
