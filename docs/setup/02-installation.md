---
title: Installation
---

# Installation

## Download the repository

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

::: danger
If placing the project code inside a folder visible to the web server, make sure that only the `public` folder is accessible. NEVER expose the `.env` files as they contain sensitive information.
:::

## Install dependencies

Run the following commands to install the dependencies:

```sh
composer install
npm install
```