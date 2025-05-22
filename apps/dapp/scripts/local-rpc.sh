#!/bin/bash

set -a
source .env.e2e
set +a

# check if fork url is set
if [ -z "$ANVIL_FORK_URL" ]; then
  echo "Error: ANVIL_FORK_URL environment variable is required"
  echo "Please set it in your .env file or environment"
  exit 1
fi

CHAIN_ID=${ANVIL_CHAIN_ID:-84532}
FORK_BLOCK=${ANVIL_FORK_BLOCK_NUMBER:-22759770}
BLOCK_TIME=${ANVIL_BLOCK_TIME:-1}
PORT=${ANVIL_PORT:-8545}
FUND_AMOUNT=${TEST_WALLET_FUND_AMOUNT:-10}
CHAIN_STATE_FILE="cypress/state.json"

cleanup() {
  echo "Killing anvil..."
  if [ -n "$ANVIL_PID" ] && ps -p "$ANVIL_PID" > /dev/null; then
    kill "$ANVIL_PID" 2>/dev/null || kill -9 "$ANVIL_PID" 2>/dev/null
  fi
  wait "$ANVIL_PID" 2>/dev/null
}

trap cleanup EXIT INT TERM

# check if test fixtures are already setup
if [ ! -f "$CHAIN_STATE_FILE" ]; then
  echo "Test suite fixtures not found, creating..."
  ./scripts/create-test-fixtures.sh
  
  # check if fixture creation was successful
  if [ ! -f "$CHAIN_STATE_FILE" ]; then
    echo "Error: Failed to create test fixtures"
    exit 1
  fi
  
  echo "Fixtures created successfully\n"
fi


echo "Starting anvil..."

anvil \
  --chain-id $CHAIN_ID \
  --fork-block-number $FORK_BLOCK \
  --block-time $BLOCK_TIME \
  --fork-url $ANVIL_FORK_URL \
  --load-state $CHAIN_STATE_FILE \
  $([ "$1" = "-s" ] && echo "--silent") \
  --port $PORT &

ANVIL_PID=$!

wait $ANVIL_PID
