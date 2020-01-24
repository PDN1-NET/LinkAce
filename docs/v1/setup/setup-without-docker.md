---
title: Setup without Docker
layout: default
---

The application was developed with being used with Docker in mind. All following steps will try to work around this but
cannot be guaranteed to work in every environment. Please remember that you need shell access to work with LinkAce.

### Requirements

* Shell access to your server
* **PHP 7.2, 7.3 or 7.4**, with the following extenstions
    * OpenSSL
    * PDO
    * Mbstring
    * Tokenizer
    * XML
    * Ctype
    * JSON
* Composer must be installed
* A database server with one of the following databases running:
    * MySQL 5.6+ (recommended)
    * PostgreSQL 9.4+
    * SQLite 3.8.8+ (not tested, may work)
    * SQL Server 2017+ (not tested, may work)
* Node 12 LTS must be installed

Older PHP versions will not be supported in any way. Please do yourself a favor and do not expose yourself or your users
to any risks by using an outdated PHP version.

### 1. Get the .zip file

Download the latest release from the [release page](https://github.com/Kovah/LinkAce/releases).

Extract all files and place them wherever you need them. This obviously depends on how and where you want to run the
app.

### 2. Edit the .env file and generate a secret

Make a copy of the `.env.example` file and name it `.env`. Please do not change any values in it now!

### 3. Install dependencies

Run the following commands to install all needed dependencies and prepare LinkAce for the setup:

```
composer install --prefer-dist

php artisan key:generate

npm install
npm run prod
```

### 4. Point your web server to /public

For security reasons the application won't run from the base filder where you extracted the files to. Instead, point
your web server to the `/public` directory in your linkace folder.

If you are using Apache, LinkAce already ships with a proper .htaccess file.

If you are using nginx, please add the following lines to your nginx configuration file:

```
add_header X-Frame-Options "SAMEORIGIN";
add_header X-XSS-Protection "1; mode=block";
add_header X-Content-Type-Options "nosniff";

location / {
  try_files $uri $uri/ /index.php?$query_string;
}

location ~* \.(?:css|js|map|scss)$ {
  expires 7d;
  access_log off;
  add_header Cache-Control "public";
  try_files $uri @fallback;
}

error_page 404 /index.php;
```

### 5. Run the built-in setup

Now open the URL pointing to LinkAce in your browser. The built-in setup should start. Follow the instructions to
configure a database and register your user account.

You can now use LinkAce. Please make sure to follow the next post-setup steps to make sure LinkAce works correctly.

---

Next Step: [Post-Setup Steps](/docs/v1/setup/post-setup)
