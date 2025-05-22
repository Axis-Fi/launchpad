#!/bin/bash

set -a
source .env.e2e
set +a

# Start anvil if not already running
if ! nc -z localhost $ANVIL_PORT &>/dev/null; then
    echo "Starting anvil..."
    pnpm local-rpc -s &
    ANVIL_PID=$!
fi

# Start dev server if not already running  
if ! nc -z $VITE_APP_HOST $VITE_APP_PORT &>/dev/null; then
    echo "Starting dev server..."
    pnpm dev-quiet &
    DEV_PID=$!
fi

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