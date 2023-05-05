#!/bin/bash

update_daemon_log="/var/log/syna/update_daemon.log"

# Search for the last occurrence of "@Status"
line=$(grep "@Status\." $update_daemon_log | tail -1)

# Extract the string that comes after "@Status" on the same line
status=${line#*@Status.}

case $status in
  "RECEIVING")
    progress=10
    ;;
  "VALIDATING")
    progress=20
    ;;
  "VALIDATED")
    progress=30
    ;;
  "UPDATING")
    progress=40
    ;;
  "UPDATED")
    progress=70
    ;;
  "POSTPROCESSING")
    progress=80
    ;;
  "POSTPROCESSED")
    progress=90
    ;;
  *)
    progress=0  # default value if status is not recognized
    ;;
esac

echo "Content-type: text/plain"
echo ""
echo "$progress"
