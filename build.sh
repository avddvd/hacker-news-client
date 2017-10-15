#!/bin/bash

#VER=$( git rev-parse HEAD | cut -c 1-10 )
VER=1.0.0
docker build -t hacker-news-client:$VER .

