import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Menu = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.navigation-menu-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <circle className="navigation-menu-vertical_svg__a" cx={11.987} cy={20.628} r={2.625} />,
    <circle className="navigation-menu-vertical_svg__a" cx={11.987} cy={3.378} r={2.625} />,
    <circle className="navigation-menu-vertical_svg__a" cx={11.987} cy={12.003} r={2.625} />
  );

export default Menu;
