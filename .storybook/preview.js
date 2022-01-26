import '../src/styles/objektiv.css';
import ThemeSelector from '../src/themes/ThemeSelector';
import { ThemeProvider } from 'emotion-theming';
import Theme from '../src/themes/theme';

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
      order: [
        'Components',
        ['Layout', 'Inputs', 'Navigation', 'Surfaces', 'Feedback', 'Data Display'],
      ],
    },
  },
  controls: {
    expanded: true,
    exclude: [
      'ref',
      'centerRipple',
      'disableElevation',
      'disableFocusRipple',
      'disableRipple',
      'disableTouchRipple',
      'focusRipple',
      'focusVisibleClassName',
      'TouchRippleProps',
      'onFocusVisible',
      'tabIndex',
      'gutterBottom',
      'edge',
      'aria-label',
      'aria-labelledby',
    ],
    sort: 'requiredFirst',
  },
};
