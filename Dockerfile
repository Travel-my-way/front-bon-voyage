FROM nginx:stable
LABEL MAINTAINER pierre-yves@bonvoyage-eco.net

COPY dist /usr/share/nginx/html