import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ArrowRight = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.keyboard-arrow-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="keyboard-arrow-right_svg__a"
      d="M23.25 12.497H.75M19.5 16.247l3.75-3.75-3.75-3.75"
    />
  );

export default ArrowRight;
