#!/bin/bash

set -a
source .env.e2e
set +a

CHAIN_STATE_FILE="cypress/state.json"
FUND_AMOUNT=${TEST_WALLET_FUND_AMOUNT:-10}
CHAIN_ID=${ANVIL_CHAIN_ID:-84532}
FORK_BLOCK=${ANVIL_FORK_BLOCK_NUMBER:-22759770}
BLOCK_TIME=${ANVIL_BLOCK_TIME:-1}
PORT=${ANVIL_PORT:-8545}

cleanup() {
  echo "Killing anvil..."
  if ps -p "$ANVIL_PID" > /dev/null; then
    kill "$ANVIL_PID" 2>/dev/null || kill -9 "$ANVIL_PID" 2>/dev/null
  fi
  wait "$ANVIL_PID" 2>/dev/null
}

# handle user interrupts
trap cleanup EXIT INT TERM HUP QUIT

echo "Removing old chain state file..."

rm -f $CHAIN_STATE_FILE

echo "Starting anvil..."

anvil \
  --chain-id $CHAIN_ID \
  --fork-block-number $FORK_BLOCK \
  --block-time $BLOCK_TIME \
  --fork-url $ANVIL_FORK_URL \
  --dump-state $CHAIN_STATE_FILE \
  --silent \
  --port $PORT &

ANVIL_PID=$!

# give anvil some time to start
sleep 2

if [ -n "$TEST_WALLET" ]; then  
  ./scripts/fund-account.sh "$TEST_WALLET" "$FUND_AMOUNT"
fi

echo "Running Cypress to create test fixtures..."
pnpm start-test dev-quiet $VITE_APP_URL 'cypress open --config "specPattern=cypress/create-fixtures.ts"' 
CYPRESS_EXIT_CODE=$?

# check if cypress test fixture creation was successful
if [ $CYPRESS_EXIT_CODE -ne 0 ]; then
  echo "Error: Cypress test setup failed with exit code $CYPRESS_EXIT_CODE"
  kill $ANVIL_PID
  exit 1
fi

# cleanup
kill $ANVIL_PID
wait $ANVIL_PID

# verify the file exists after running the script
if [ ! -f "$CHAIN_STATE_FILE" ]; then
  echo "Error: state.json still not found after running create-test-fixtures.sh"
  exit 1
fi


