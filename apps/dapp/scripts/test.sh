#!/bin/bash

concurrently \
 --names "unit,smoke,e2e" \
 --kill-others-on-fail \
 --prefix-colors "yellow,cyan,green,magenta" \
 --group \
 --timings \
 --handle-input \
 "pnpm test:unit" \
 "pnpm smoke" \
 "pnpm e2e";