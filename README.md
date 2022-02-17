# Svelte-temp

[![Build](https://github.com/Wolven531/svelte-temp/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/Wolven531/svelte-temp/actions/workflows/build.yml)
[![Unit Tests (jest)](https://github.com/Wolven531/svelte-temp/actions/workflows/unit-test.yml/badge.svg?branch=main)](https://github.com/Wolven531/svelte-temp/actions/workflows/unit-test.yml)
[![Deploy Website Using Surge](https://github.com/Wolven531/svelte-temp/actions/workflows/deploy-with-surge.yml/badge.svg?branch=main)](https://github.com/Wolven531/svelte-temp/actions/workflows/deploy-with-surge.yml)

## Building and running in local mode

Install the dependencies

```bash
yarn
```

Then, start in dev mode

```bash
yarn dev
```

Finally, navigate to [localhost:8080](http://localhost:8080)

## Building and running in production mode

To create an optimized version of the app

```bash
yarn build
```

Then, run the newly built app

```bash
yarn start
```

### Notes

#### Using TypeScript

If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte)

#### Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility w/ static fileservers, allowing you to deploy your app anywhere

If you're building a single-page app (SPA) w/ multiple routes, sirv needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json

```js
"start": "sirv public --single"
```

#### Allow others to connect to hosted local app

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`

#### Running Production mode locally

This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com)

#### IDE Advice

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense
