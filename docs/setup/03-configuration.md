---
title: Configuring the system
---

# Configuration

You must configure the system before it can be used. The environment configurations are stored in the `.env` files.

First, copy the `.env` file to a new file named `.env.local`. Then, edit `.env.local` to fit your environment.

While most environmental variables will work out-of-the-box for development purposes, you most certainly need to change the database URL.

::: danger
In production, you MUST change the secret values `APP_SECRET` and `JWT_KEY`!

Also change `APP_ENV` to `prod` when in production.
:::

See the [environmental variable reference](../reference/envvars.md) for all available configuration values.

## Database URL

The value of `DATABASE_URL` should be changed to match your database configuration.

The following line explains what each field is for:

```env
DATABASE_URL="mysql://username:password@127.0.0.1:3306/dbname?serverVersion=8&charset=utf8mb4"
```

::: tip
Change `username`, `password`, `dbname` to the appropriate values. You should also ensure that the IP address, port, and server version match your configuration.
:::

See the [Symfony docs](https://symfony.com/doc/current/doctrine.html#configuring-the-database) for more details.