import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ArrowUp = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.keyboard-arrow-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path className="keyboard-arrow-up_svg__a" d="M12 23.247V.747M8.25 4.497L12 .747l3.75 3.75" />
  );

export default ArrowUp;
