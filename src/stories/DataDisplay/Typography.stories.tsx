import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from '../../themes/ThemeSelector';
import Typography, { TypographyProps } from '../../components/Typography';

export default {
  title: 'Components/Data Display/Typography',
  component: Typography,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: 'Some text',
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

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  component: 'p',
};
