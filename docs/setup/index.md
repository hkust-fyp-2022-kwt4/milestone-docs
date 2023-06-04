---
title: Setting up
---

# Milestone setup

Step-by-step guide on setting up Milestone for production:

- [Prerequisites](./01-prerequisites.md)

## Quick start

::: tip
Follow the links above if you haven't done the setup before.
:::

Here is a quick rundown of what are needed to be done:

1. Clone the repository:

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

2. Install dependencies:

    ```sh
    composer install
    npm install
    ```

3. Copy [`.env`](https://github.com/hkust-fyp-2022-kwt4/milestone/blob/main/.env) to `.env.local` and change values as needed.

    See [ENV reference](./todo) for more information.

4. Create database and schema:

    ```sh
    php bin/console doctrine:database:create
    php bin/console doctrine:schema:create
    ```

5. Build webpack assets:

    ```sh
    npm run dev
    ```

    ::: tip NOTE
    The `dev` build is needed because the `prod` build currently causes breakages in the front-end.
    :::

    ::: tip
    For development, use `npm run watch` to use the filesystem watcher which will automatically build the assets whenever there are file changes.
    :::

6. (For development only) Start the development server

    ```sh
    symfony serve
    ```

    ::: danger
    NEVER use the development server in production! Refer to the [Symfony docs](https://symfony.com/doc/current/deployment.html) for deployment guides.
    :::