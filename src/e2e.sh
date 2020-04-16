#!/bin/bash 
npm run start:prod & 
npx wait-on http://localhost:3000
npm run test-e2e