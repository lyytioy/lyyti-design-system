import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const LayoutRows = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.layout-headline_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <rect
      className="layout-headline_svg__a"
      x={0.75}
      y={0.747}
      width={22.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-headline_svg__a"
      x={0.75}
      y={9.747}
      width={22.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-headline_svg__a"
      x={0.75}
      y={18.747}
      width={22.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default LayoutRows;
