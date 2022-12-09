module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-postcss'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  core: {},
  staticDirs: ['../public'],
  docs: {
    docsPage: 'automatic'
  }
};