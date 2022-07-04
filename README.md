![publishing badge](https://github.com/lyytioy/lyyti-design-system/actions/workflows/npm_publish.yml/badge.svg)
![deploy storybook badge](https://github.com/lyytioy/lyyti-design-system/actions/workflows/deploy_storybook.yml/badge.svg)
![quality checks badge](https://github.com/lyytioy/lyyti-design-system/actions/workflows/quality_check.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# Lyyti Design System

This is the official repository for Lyyti Design System.

This Design System is based on [MUI](https://mui.com/) (Material-UI).

## Using Lyyti Design System

First add it to your project

```shell
npm install @lyyti/design-system --save
```

Add this to your `index.tsx`

```javascript
import '@lyyti/design-system/styles/objektiv.css';
```

This will import all the needed fonts you will need for the components. After that you can just add
any of our components to any file, and they should look the same as they do in [Storybook](https://lyytioy.github.io/lyyti-design-system).

## Storybook

[Storybook](https://storybook.js.org/) is a JavaScript tool that allows developers to create
organized UI systems making both the building process and documentation more efficient and easier to use.

[See live here](https://lyytioy.github.io/lyyti-design-system)

## Testing in your project

It's usually quite hard to test your changes of the UI library in your own project, but we have a solution for you.

Make sure to clone the repository and do the following

1. Run `npm run build`
2. Run `cd dist`
3. Run `npm install`
4. Run `npm link`
5. Go to your own project directory
6. Run `npm link @lyyti/design-system`

If you run into an `Invalid hook` error in the project, here's what to do.
The error is about having two copies of the react packace caused by the link. More info can be found [in the React docs](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react).

- Go to the design system directory
- Run `npm link [..path/to/yourproject]/node_modules/react`
- Repeat steps `5` and `6` of the linking process

## Contribute

We welcome contributors. In order to do so you need fork this repository and only make changes from there.
Once you have made your changes please create a cross fork pull request. One of our developers will get to it
as soon as possible.

Please make sure that you use our ESLint and Prettier rules and always use Typescript.

### Version bumping

When you create a pull request with changes make sure to also bump the package.json version with one of the commands below. If you are unsure which one you should bump, ask in your PR.

```shell
npm run bump patch # Goes from 1.0.0 -> 1.0.1
```

Or replace patch with minor (1.0.0 -> 1.1.0) or major (1.0.0 -> 2.0.0).

### Release

When your pull request is merged to `next`, you should make a release PR from `next` to `main`. Typically a release PR should have title of "Version 1.0.1" and the description list what changes are introduced.

Our release process from there on is completely automated. As soon as a PR is merged to main a tag and release are created
then that is published to the NPM registry.

## Get started

Like all node project you start by installing all the needed dependencies.

```shell
npm ci
```

Once you have done that you can just run

```shell
npm run dev
```

That will start Storybook on `http://localhost:6006` and you can start working on what ever your heart desires.

### Building

We have two separate builds. One is for building Storybooks as a static page and the other is for
creating our production npm package.

To build Storybook as a static page simply run

```shell
npm run build-storybook
```

To build the production page simply run

```shell
npm run build
```

### Icons

We convert our SVG files to React components using a custom written template and a tool called [SVGR](https://react-svgr.com/).
To convert a `.svg` file to a React component please run the following command

```shell
npm run generate-icon --path=path/to/file.svg
```

After converting

- Add an export to `src/icons/index.ts` for the icon

- Add an import + add it to `iconsList` in `stories/DataDisplay/Icons.stories.tsx`
