export const parameters = {
  controls: { expanded: true, exclude: 'ref', sort: 'requiredFirst' },
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
