import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from '../../themes/ThemeSelector';
import '../../styles/objektiv.css';
import Typography, { TypographyProps } from '../../components/Typography';

export default {
  title: 'Components/Data Display/Typography',
  component: Typography,
  argTypes: {
    align: {
      description: 'Set the text-align on the component.',
      table: {
        defaultValue: {
          summary: 'inherit',
        },
      },
    },
    color: {
      description:
        'The color of the component. It supports those theme colors that make sense for this component.',
      table: {
        defaultValue: {
          summary: 'initial',
        },
      },
    },
    component: {
      description:
        'The component used for the root node. Either a string to use a HTML element or a component. Overrides the behavior of the variantMapping prop.',
      control: { type: 'text' },
    },
    display: {
      description: 'Controls the display type.',
      table: {
        defaultValue: {
          summary: 'initial',
        },
      },
    },
    noWrap: {
      description:
        'If true, the text will not wrap, but instead will truncate with a text overflow ellipsis. Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).',
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    paragraph: {
      description: 'If true, the text will have a bottom margin.',
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    variant: {
      description: 'Applies the theme typography styles.',
    },
  },
  args: {
    children: 'Some text',
    noWrap: false,
    paragraph: false,
  },
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <ThemeSelector>
    <Typography {...args} />
  </ThemeSelector>
);

export const Default = Template.bind({});
Default.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean felis turpis, bibendum et purus a, lacinia ornare nunc. In posuere sapien eu ultrices tristique. Etiam libero velit, egestas gravida diam at, maximus pulvinar felis. Praesent ut vestibulum velit. Duis sapien sapien, consequat ut luctus vitae, tincidunt quis purus. Pellentesque iaculis faucibus sapien vitae tincidunt. Praesent imperdiet libero et nisi ullamcorper convallis. Duis porta massa molestie tellus aliquet efficitur. In eu tristique turpis, eu convallis velit. Sed id lacus massa. Nullam sed mauris mattis, consequat odio eu, porttitor arcu. Praesent laoreet congue nisl, a hendrerit eros congue vel. Cras quis placerat lorem, ut iaculis quam. Phasellus sit amet ligula egestas, malesuada ante eu, bibendum mi. Phasellus porttitor lectus eget cursus rhoncus. Vivamus vitae odio a risus euismod rutrum sed id tortor.',
};

export const pStyledAsH1 = Template.bind({});
pStyledAsH1.args = {
  variant: 'h1',
  component: 'p',
  color: 'primary',
};
