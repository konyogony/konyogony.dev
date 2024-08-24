#!/bin/bash

trunk serve &
./tailwindcss -i styles/input.css -o styles/output.css --watch
