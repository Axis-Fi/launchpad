#!/bin/bash

set -a
source .env.e2e
set +a

concurrently \
 --kill-others \
 --kill-others-on-fail \
 --success first \
 "nc -z localhost $ANVIL_PORT &>/dev/null && tail || pnpm local-rpc -s" \
 "nc -z $VITE_APP_HOST $VITE_APP_PORT &>/dev/null && tail || pnpm dev-quiet" \
 "wait-on $VITE_APP_URL && cypress open --config 'specPattern=cypress/e2e/**/*.cy.ts'"

#  "nc -z $VITE_APP_HOST $VITE_APP_PORT &>/dev/null && tail || pnpm preview" \
