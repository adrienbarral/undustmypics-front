#!/bin/sh
ng build -prod
scp -Cr dist/ root@185.135.10.40:/root/front/

