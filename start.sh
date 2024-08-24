#!/bin/bash

cd backend

./db.sh &
./rs.sh &

cd ..
cd frontend

./start.sh
