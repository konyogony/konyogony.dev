#!/bin/bash

cd backend

cargo run &

cd ..
cd frontend

bun run dev