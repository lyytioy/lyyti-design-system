import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const SvgHourglass = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.hourglass_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="hourglass_svg__a"
      d="M6 .75a1.5 1.5 0 00-1.5 1.5v2.367a7.5 7.5 0 0015 0V2.25A1.5 1.5 0 0018 .75z"
    />,
    <path
      className="hourglass_svg__a"
      d="M6 23.25a1.5 1.5 0 01-1.5-1.5v-2.367a7.5 7.5 0 0115 0v2.367a1.5 1.5 0 01-1.5 1.5zM5.477 8.25h13.046"
    />,
    <path
      className="hourglass_svg__a"
      d="M18.548 23.147C17.264 20.451 14.813 18 12 18s-5.264 2.451-6.548 5.147"
    />
  );

export default SvgHourglass;
