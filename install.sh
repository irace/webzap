#!/bin/bash

curl -L https://github.com/irace/webzap/tarball/master | tar xv;
mv irace-webzap-* webzap;
cd webzap;
easy_install Flask;
python webzap.py;