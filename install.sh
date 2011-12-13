#!/bin/bash

curl -L https://github.com/irace/webzap/tarball/master | tar -xv;
cd irace-webzap-*;
easy_install Flask;
python webzap.py;