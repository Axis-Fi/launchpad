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
 "wait-on $VITE_APP_URL && cypress run --config 'specPattern=cypress/e2e/**/*.cy.ts'"

# notes: only runs the rpc/dev server if its not already running
# tail is superfluous, but required to keep the process from exiting, as concurrently
# returns the exit code of the first process that exits, which should be cypress.
# the reason for this is so that this command can run independently, or in a pipeline without killing 
# the dev/rpc server that the rest of the pipeline might depend on i.e. the killing is handled higher up


#  "nc -z $VITE_APP_HOST $VITE_APP_PORT &>/dev/null && tail || pnpm preview" \
