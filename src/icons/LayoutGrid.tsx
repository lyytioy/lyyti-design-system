import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const LayoutGrid = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.layout-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <rect className="layout-2_svg__a" x={1.5} y={1.497} width={21} height={21} rx={1.5} ry={1.5} />,
    <path className="layout-2_svg__a" d="M1.5 7.497h21M12 22.497v-15M1.5 14.997h21" />
  );

export default LayoutGrid;
