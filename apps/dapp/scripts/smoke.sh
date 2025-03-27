#!/bin/bash

concurrently \
 --kill-others \
 --kill-others-on-fail \
 --success first \
 "nc -z $VITE_APP_HOST $VITE_APP_PORT &>/dev/null && tail || pnpm preview" \
 "wait-on $VITE_APP_URL && cypress run --browser chrome --spec 'cypress/smoke.cy.ts'"

# concurrently \
#  --group \
#  --names "mainnet,testnet" \
#  --prefix-colors "cyan,green" \
#  --kill-others-on-fail \
#  --timings \
#  --handle-input \
#  "pnpm smoke:mainnet" \
#  "pnpm smoke:testnet"