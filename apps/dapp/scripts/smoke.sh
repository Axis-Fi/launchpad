#!/bin/bash

cleanup() {
    echo "Cleaning up..."
    local pid=$(lsof -ti:$VITE_APP_PORT 2>/dev/null)
    if [ -n "$pid" ]; then
        echo "Killing process $pid on port $VITE_APP_PORT"
        kill $pid 2>/dev/null
        sleep 1
        # Force kill if still running
        if kill -0 $pid 2>/dev/null; then
            kill -9 $pid 2>/dev/null
        fi
    fi

}

# Set trap to run cleanup on exit, interrupt, or termination
trap cleanup EXIT INT TERM

# Start preview server if not already running
if ! nc -z $VITE_APP_HOST $VITE_APP_PORT &>/dev/null; then
    echo "Starting preview server..."
    pnpm preview &
fi

# Wait for server to be ready
echo "Waiting for preview server..." $VITE_APP_URL
wait-on -t 120000 $VITE_APP_URL

# Run smoke tests
echo "Running smoke tests..."
cypress run --browser chrome --spec "cypress/smoke.cy.ts"
CYPRESS_EXIT_CODE=$?

exit $CYPRESS_EXIT_CODE