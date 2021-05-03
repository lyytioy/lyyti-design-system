import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const KeyboardArrowDown = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.keyboard-arrow-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="keyboard-arrow-down_svg__a"
      d="M12 23.247V.747M8.25 19.497l3.75 3.75 3.75-3.75"
    />
  );

export default KeyboardArrowDown;
