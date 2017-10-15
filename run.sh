#!/bin/bash

 . ./build.sh

docker run -ti -p 80:80 hacker-news-client:$VER

