---
title: Installation
---

# Installation

## Download the application code

Clone the repository using Git:

<CodeGroup>
<CodeGroupItem title="HTTPS">

```sh
git clone https://github.com/hkust-fyp-2022-kwt4/milestone.git
```

</CodeGroupItem>

<CodeGroupItem title="SSH">

```sh
git clone git@github.com:hkust-fyp-2022-kwt4/milestone.git
```

</CodeGroupItem>
</CodeGroup>

## Install dependencies

Run the following commands to install the dependencies:

```sh
composer install
npm install
```

## Build front-end assets

Run the following command to build the assets for the UIs:

```sh
npm run dev
```

::: tip NOTE
`dev` should also be used in production because the `prod` build causes problems.
:::

## Configure web server

If using the system for production, a web server should be configured to serve the website. This documentation provides guidance for Nginx and Apache (adapted from [Symfony docs](https://symfony.com/doc/current/setup/web_server_configuration.html)).

::: tip
After setting up the web server, make sure the `var` folder is writable by the web server's user (usually `www-data`) as it is used to store logs and cached data.
:::

### Apache

[Symfony docs](https://symfony.com/doc/current/setup/web_server_configuration.html#apache-with-php-fpm).

It is recommended to use the PHP-FPM module with Apache. Create a new virtual host with the following sample config (modify as needed):

```apache{26-31}
<VirtualHost *:80>
    ServerName domain.tld
    ServerAlias www.domain.tld

    # Uncomment the following line to force Apache to pass the Authorization
    # header to PHP: required for "basic_auth" under PHP-FPM and FastCGI
    #
    # SetEnvIfNoCase ^Authorization$ "(.+)" HTTP_AUTHORIZATION=$1

    # For Apache 2.4.9 or higher
    # Using SetHandler avoids issues with using ProxyPassMatch in combination
    # with mod_rewrite or mod_autoindex
    <FilesMatch \.php$>
        SetHandler proxy:fcgi://127.0.0.1:9000
        # for Unix sockets, Apache 2.4.10 or higher
        # SetHandler proxy:unix:/path/to/fpm.sock|fcgi://dummy
    </FilesMatch>

    # If you use Apache version below 2.4.9 you must consider update or use this instead
    # ProxyPassMatch ^/(.*\.php(/.*)?)$ fcgi://127.0.0.1:9000/var/www/project/public/$1

    # If you run your Symfony application on a subpath of your document root, the
    # regular expression must be changed accordingly:
    # ProxyPassMatch ^/path-to-app/(.*\.php(/.*)?)$ fcgi://127.0.0.1:9000/var/www/project/public/$1

    DocumentRoot /var/www/project/public
    <Directory /var/www/project/public>
        # enable the .htaccess rewrites
        AllowOverride All
        Require all granted
    </Directory>

    # uncomment the following lines if you install assets as symlinks
    # or run into problems when compiling LESS/Sass/CoffeeScript assets
    # <Directory /var/www/project>
    #     Options FollowSymlinks
    # </Directory>

    ErrorLog /var/log/apache2/project_error.log
    CustomLog /var/log/apache2/project_access.log combined
</VirtualHost>
```

::: danger
Note that only the `public/` folder is exposed. The source code root MUST NOT be exposed otherwise sensitive data will be leaked.

You should set up the website as a virtual host to ensure only the `public/` folder is accessible. Also set the `DocumentRoot` to the `public/` folder.
:::

Ensure that the `mod_proxy` and `mod_proxy_fcgi` modules are installed and enabled in Apache.

```sh
a2enmod proxy
a2enmod proxy_fcgi
```

#### Rewrite

[Symfony docs](https://symfony.com/doc/current/setup/web_server_configuration.html#adding-rewrite-rules-for-apache).

Some rewrite rules are also needed to redirect users to `index.php`. You could install Symfony's `apache-pack` which will place [this `.htaccess` file](https://github.com/symfony/recipes-contrib/blob/main/symfony/apache-pack/1.0/public/.htaccess) inside the `public` directory. Make sure the `AllowOverride` directive of the virtual host is enabled.

```sh
composer require symfony/apache-pack
```

Alternatively, you could copy the contents of the `.htaccess` file to the virtual host configuration.

### Nginx

Refer to the [Symfony docs](https://symfony.com/doc/current/setup/web_server_configuration.html#nginx).

::: danger
Be careful to only expose the `public` folder.
:::

## Create database

A database management system should be prepared for the website. The database will be created in the [configuration](./03-configuration.md) step.

In this step, make sure a DBMS is installed and set up correctly, and create a user for the application (with appropriate permissions).