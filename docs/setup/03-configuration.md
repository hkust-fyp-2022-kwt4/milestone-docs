---
title: Configuring the system
---

# Configuration

::: tip
Remember to clear the cache after every configuration change. See [clearing the cache](#clearing-the-cache).
:::

You must configure the system before it can be used. The environment configurations are stored in the `.env` files.

First, copy the `.env` file to a new file named `.env.local`. Then, edit `.env.local` to fit your environment.

While most environmental variables will work out-of-the-box for development purposes, you most certainly need to change the database URL.

::: danger
In production, you MUST change the secret values `APP_SECRET` and `JWT_KEY` (see [secrets](#secrets))!

Also change `APP_ENV` to `prod` when in production.
:::

See the [environmental variable reference](../reference/envvars.md) for all available configuration values.

## Database

The value of `DATABASE_URL` should be changed to match your database configuration.

The following line explains what each field is for:

```env
DATABASE_URL="mysql://username:password@127.0.0.1:3306/dbname?serverVersion=8&charset=utf8mb4"
```

::: tip
Change `username`, `password`, `dbname` to the appropriate values. You should also ensure that the IP address, port, and server version match your configuration.
:::

See the [Symfony docs](https://symfony.com/doc/current/doctrine.html#configuring-the-database) for more details.

### Creating a database

If the database specified in `DATABASE_URL` does not already exist, Symfony can create it for you.

```sh
php bin/console doctrine:database:create
```

Then, run the following command to create the required tables:

```sh
php bin/console doctrine:schema:create
```

## Secrets

In production, the secret values must be rotated to prevent attacks.

For `APP_SECRET`, generate a value through PHP using the following line (you can start an interactive session from the command line using `php -a`):

```php
echo bin2hex(random_bytes(16));
```

For `JWT_KEY`, use this line:

```php
echo base64_encode(random_bytes(32));
```

## Mail

::: tip
For other mail transports (e.g. Amazon SES, Mailgun, Sendgrid, etc.), see [Symfony docs](https://symfony.com/doc/current/mailer.html#transport-setup) for the DSN formats.
:::

The system requires additional configuration for sending emails (for authentication purposes). Email authentication serves as a backup to Azure AD authentication. `MAILER_DSN` should be changed to match the configuration.

### SMTP

If using a SMTP server to send emails, set `MAILER_DSN` according to the following example.

```
smtp://user:pass@smtp.example.com:25
```

### Microsoft Graph

During development, the system was made to send emails on behalf of Microsoft account owners (e.g. from an @connect.ust.hk email address). 

This functionality can be used in production but requires additional setup and maintenance. 

#### Obtaining tokens

Refer to the [guide to setup Azure Active Directory](./04-aad-setup.md) and follow the steps to set up an app registration for sending emails. 

In addition, set the environmental variable `EMAIL_SENDER` to the email address of the Microsoft account that emails will be sent from.

#### Authorizing user

Next, you should authorize the application with a Microsoft account so that the application can send emails on the account's behalf.

First, login into the system as an admin. Then, go to the 

#### Batch job setup

## Azure Active Directory

## Cloud file storage

## Dumping to `.php`

You may choose to dump the contents of the `.env` files to a php file for increased performance.

It can be done using the command, which copies the content of the `.env` and `.env.local` files to `.env.local.php` and sets the environment to `prod`:

```sh
composer dump-env prod
```

::: tip
Note that `.env.local.php` takes precedence over all other `.env` files. All changes to the environment should be made in the `.php` file from now on.
:::

## Clearing the cache

The cache should be cleared whenever a change to the configuration is made.

After properly configuring the system, clear the cache using the following command:

```sh
php bin/console cache:clear
```

The environment can be specified using the `--env` option.