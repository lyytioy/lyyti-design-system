import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const PaginationLeft = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.navigation-left-circle-1_1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="navigation-left-circle-1_1_svg__a"
      d="M7.501 11.997h9M11.251 15.747l-3.75-3.75 3.75-3.75"
    />,
    <circle className="navigation-left-circle-1_1_svg__a" cx={12.001} cy={11.997} r={10.5} />
  );

export default PaginationLeft;
