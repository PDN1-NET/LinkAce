---
title: Setup with Docker
layout: default
---

## Setup with Docker

Working with Docker is pretty straight forward. The image available on Docker Hub contains the application code, any
precompiled assets as well as PHP installed. This means you can use any web server you want, any cache driver you want
and any database system you want.

To make things easier, we provide a Docker Compose file (docker-compose.production.yml) in the repository which
contains all needed services, perfectly configured to just run the application right away.

### 1. Copy all needed files

All files you need are `docker-compose.production.yml`, `.env.docker` and `nginx.conf`. Copy both to the directory you
want to use for the application.

### 2. Modify the .env.docker file

Now open the `.env.docker` file and follow the instructions inside the file. All needed variables you have to configure
are marked accordingly.

### 3. Modify the nginx.conf file (optional)

This step is optional but may depend on your setup. You probably want to run the app standalon on a server. For this I
highly recommend providing SSL certificates ([Let's Encrypt](https://letsencrypt.org/)) and change the `nginx.conf` as 
well as the `docker-compose.production.yml` file:

* In `nginx.conf`: replace `listen 0.0.0.0:8085` with `listen 0.0.0.0:8085 ssl;`
* In `nginx.conf`: uncomment the lines beginning with `ssl_certificate` and change the certificate file names
* In `docker-compose.production.yml`: replace `"127.0.0.1:80:8085"` with `"127.0.0.1:443:8085"`.
* In `docker-compose.production.yml`: uncommend the `/path/to/ssl/certificates:/bitnami/nginx/conf/bitnami/certs` line 
  and set the correct path to your certificates before the colon.

### 4. Run the application

After you completed the above steps, run the following command to start up the container setup:

```bash
docker-compose up -d --build
```
### 5. Prepare the database

As of now, Linkace does not support a standalone installer like Wordpress. To be able to use the app you have to
prepare the database and register an admin account for yourself. First, initialize the database.  
Please note that `linkace_php_1` is the name of your PHP container here. It may differ from your name. You will find
the name of your container in the output of the previous command, but will most likely and with `_php_1`.

```bash
docker exec -it linkace_php_1 bash -c "php artisan migrate --seed"
```

Now register a new user for yourself. Replace `yourname` with a username consisting of letters and numbers, and 
`your@email.com` with your actual email. You then have to set a password.

```bash
docker exec -it linkace_php_1 bash -c "php artisan registeruser yourname your@email.com"
```

You can now use LinkAce.

---

Next Step: [Post-Setup Steps](/docs/v1/setup/post-setup)
