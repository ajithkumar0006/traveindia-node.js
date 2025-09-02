#!/usr/bin/env bash
# Simple alert script: flags containers that are not healthy or not running.

set -euo pipefail

echo "==== Container Health Check $(date) ===="

# List all containers with their name + health + status
docker ps --format '{{.Names}}|{{.Status}}|{{.Ports}}' | while IFS='|' read -r name status ports; do
  echo "[$name] $status  $ports"
  # Alert if not running or unhealthy
  if [[ "$status" != Up* ]] || [[ "$status" == *unhealthy* ]]; then
    echo "ALERT: Container $name is not healthy/running: $status" >&2
    # Example: send mail (if mailx configured)
    # echo "Container $name unhealthy: $status" | mail -s "Docker Alert" you@example.com
  fi
done

