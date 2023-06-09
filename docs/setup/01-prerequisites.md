---
title: Prerequisites
---

# Prerequisites

The system requires the following to function properly:
- PHP
- Composer
- Node.js (and npm)
- MySQL

In addition, when using in production, a web server like Apache or Nginx is needed. The application was only tested under HTTPS, so it is strongly recommended to prepare an environment with HTTPS capabilities.

## PHP

Requires PHP 8.1+. Refer to [php.net](https://www.php.net/) for how to install on other OSes.

::: tip
Make sure the `php` command is available on the terminal by adding it to the PATH environmental variable.
:::

The following steps installs PHP and several extensions on Ubuntu.

1. Add the [PPA by Ondřej Surý](https://launchpad.net/~ondrej/+archive/ubuntu/php):

    ```sh
    sudo add-apt-repository ppa:ondrej/php
    ```

2. Install PHP 8.1 and extensions:

    ```sh
    sudo apt intstall php8.1-bcmath php8.1-cli php8.1-common php8.1-curl php8.1-fpm php8.1-gd php8.1-gmp php8.1-gnupg php8.1-igbinary php8.1-imagick php8.1-intl php8.1-mbstring php8.1-mysql php8.1-opcache php8.1-phpdbg php8.1-readline php8.1-redis php8.1-sqlite3 php8.1-xdebug php8.1-xml php8.1-yaml php8.1-zip php8.1 
    ```

3. For production use, make PHP available as a script interpreter for your web server of choice.

## Node.js

[Node.js](https://nodejs.org) is needed for building front-end assets. You may install any version but the LTS version is recommended.

For Ubuntu, see the [nodesource installation instructions](https://github.com/nodesource/distributions#installation-instructions) for installation using APT.

::: tip
Make sure [NPM](https://www.npmjs.com/) is also installed (which is usually the case). You may test it by running `npm --version`.
:::

## Symfony CLI (Dev only)

::: tip
Only needed for local development. If you have set up a web server for development (or production), you may skip this prerequisite.
:::

The symfony CLI provides a built-in server for easy local development. You may find installation instructions [here](https://symfony.com/download).

## Composer

[Composer](https://getcomposer.org/) is a dependency manager for PHP. See [this page](https://getcomposer.org/download/) for installation instructions. The guide assumes you already have PHP installed and working.

## Git

You should have Git for version control and for obtaining the repository. Alternatively you could download the source code from GitHub directly.