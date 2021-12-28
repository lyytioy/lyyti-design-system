import '../src/styles/objektiv.css';

export const parameters = {
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
};
