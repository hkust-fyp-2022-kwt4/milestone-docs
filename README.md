# Milestone admin docs

A documentation site made using [VuePress](https://vuejs.press).

## Prerequisite

### Yarn

Install using:

```sh
npm install -g yarn
```

## Setup

```sh
yarn install
```

## Building

### Development server

```
yarn docs:dev
```

#### Auto reload fix

Follow these steps if the development server does not automatically reload when saving a .md file.

Download the [Run on save extension](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave) for VS Code.

Create `.vscode/settings.json` file in the workspace and add the following content:

```json
{
    "emeraldwalk.runonsave": {
        "commands": [
            {
                "match": "\\.md$",
                "cmd": "touch docs/.vuepress/config.js"
            }
        ]
    }
}
```

The extension will update the modification time of `docs/.vuepress/config.js` whenever a .md file is saved, which should trigger a automatic reload.

Note that the `touch` command only works on Linux systems. Windows users can use [this command](https://superuser.com/a/764721).

### Building the site

```
yarn docs:build
```