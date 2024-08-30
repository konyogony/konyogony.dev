#!/bin/bash

cd backend

./db.sh &

sleep 2 # in seconds

./rs.sh &

cd ..
cd frontend

./start.sh