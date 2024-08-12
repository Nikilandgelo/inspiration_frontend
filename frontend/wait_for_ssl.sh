#!/bin/sh

echo "Waiting for Certbot to issue certificates..."
while [ ! -f /ssl_certificate_keys/fullchain.pem ]; do
  sleep 1
done

echo "Certificate has found, updating Nginx configuration..."

cp ./ssl_nginx/nginx.conf ./etc/nginx/nginx.conf

echo "Nginx configuration updated. Reloading Nginx..."

nginx -s reload
