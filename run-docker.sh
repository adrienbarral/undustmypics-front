#!/bin/sh

docker run --name nginx-undust-front -v /root/front:/usr/share/nginx/html:ro -d nginx

