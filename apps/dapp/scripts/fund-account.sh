#!/bin/bash

#[ -f .env.e2e ] && source .env.e2e

ADDRESS=${1:-$TEST_WALLET}
AMOUNT=${2:-10}
PORT=${ANVIL_PORT:-8545}

WEI_AMOUNT=$(cast --to-wei "$AMOUNT" eth)

echo "Funding account $ADDRESS with ${WEI_AMOUNT} native gas tokens"

cast rpc anvil_setBalance "$ADDRESS" "$WEI_AMOUNT" --rpc-url "http://127.0.0.1:$PORT"