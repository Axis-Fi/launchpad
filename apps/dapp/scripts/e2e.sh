#!/bin/bash

set -a
source .env.e2e
set +a

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

# Start anvil if not already running
if ! nc -z localhost $ANVIL_PORT &>/dev/null; then
    pnpm local-rpc -s &
    ANVIL_PID=$!
fi

# Start dev server if not already running  
if ! nc -z $VITE_APP_HOST $VITE_APP_PORT &>/dev/null; then
    echo "Starting dev server..."
    pnpm dev-quiet &
fi

# echo what
# sleep 10000000000

# Wait for services to be ready
echo "Waiting for server..." $VITE_APP_URL
wait-on -t 120000 $VITE_APP_URL

# Run cypress
echo "Running cypress..."
cypress run --config 'specPattern=cypress/e2e/**/*.cy.ts'
CYPRESS_EXIT_CODE=$?

if [ -n "$ANVIL_PID" ]; then
    kill $ANVIL_PID 2>/dev/null
fi
if [ -n "$DEV_PID" ]; then
    kill $DEV_PID 2>/dev/null
fi

# Exit with cypress exit code
exit $CYPRESS_EXIT_CODE