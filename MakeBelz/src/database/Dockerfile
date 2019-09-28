FROM mysql:5.7
ENV MYSQL_DATABASE=root
ENV MYSQL_ROOT_PASSWORD=root

# COPY  /docker-entrypoint-initdb.d

ADD setup.sql /docker-entrypoint-initdb.d
