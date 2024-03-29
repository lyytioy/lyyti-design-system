import '../src/styles/objektiv.css';
import ThemeSelector from '../src/themes/ThemeSelector';
import { ThemeProvider } from '@emotion/react';
import Theme from '../src/themes/theme';
import { excludedParams } from './excludedParams';

export const decorators = [
  (Story) => (
    <ThemeSelector>
      <ThemeProvider theme={Theme}>
        <Story />
      </ThemeProvider>
    </ThemeSelector>
  ),
];

export const parameters = {
  actions: { disable: true },
  layout: 'centered',
  viewMode: 'docs',
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Introduction',
        'Components',
        ['Layout', 'Inputs', 'Navigation', 'Surfaces', 'Feedback', 'Data Display'],
      ],
    },
  },
  controls: {
    expanded: true,
    exclude: excludedParams,
    sort: 'requiredFirst',
  },
};
