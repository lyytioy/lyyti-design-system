# Lyyti Design System

## Storybook
### Development
Start with `yarn start`.
### Build
Build with `yarn build-storybook`.

## Icons
Icons are generated with the SVGR CLI using the `templateSvgIcon.js` template.
### Generating
Generate an SVG icon into a React component to the `src/icons` directory:

`npx @svgr/cli --template templateSvgIcon.js -d src/icons --ext tsx <SVG file path>`

## Styles
### Fonts
The fonts are defined in a separate CSS file that needs to be imported separately:

```
import '@lyyti/design-system/styles/objektiv.css';
```
### Datepicker
The `<Datepicker />` components also requires some global styles to be imported:

```
import '@lyyti/design-system/styles/datepicker.css';
```
