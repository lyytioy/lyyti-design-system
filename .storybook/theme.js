import { create } from '@storybook/theming';
import logo from '../public/lyyti_logo.png';

export default create({
  base: 'light',

  colorPrimary: '#045B56',
  colorSecondary: '#EE8B3A',

  // Typography
  // fontBase: '"Objektiv MK1 Regular", "Objektiv MK1 Medium", "Objektiv MK3 Regular"',

  // Text colors
  textColor: '#192832',

  brandTitle: 'Lyyti Design System',
  brandUrl: 'https://lyyti.com',
  brandImage: logo,
});
