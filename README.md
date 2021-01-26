# Lyyti Design System

## Storybook
### Development
Start with `yarn storybook`.
### Build
Build with `yarn build-storybook`.

## Icons
Icons are generated with the SVGR CLI using the `templateSvgIcon.js` template.
### Generating
Generate the SVG icons located in `src/icons/` into React components to the `src/components/icons` directory:

`npx @svgr/cli --template templateSvgIcon.js -d src/components/icons src/icons/Streamline-Essential-Bold/SVG/01-Interface-Essential/12-Settings/cog.svg`
