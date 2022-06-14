import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const PaginationDown = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.navigation-down-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="navigation-down-circle_svg__a"
      d="M12.001 16.497v-9M15.751 12.747l-3.75 3.75-3.75-3.75"
    />,
    <circle className="navigation-down-circle_svg__a" cx={12.001} cy={11.997} r={10.5} />
  );

export default PaginationDown;
