import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const KeyboardArrowLeft = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          `
          .keyboard-arrow-left_svg__a {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 1.5px
          }
          `
        }
      </style>
    </defs>,
    <path className="keyboard-arrow-left_svg__a" d="M23.25 12.497L0.75 12.497" />,
    <path className="keyboard-arrow-left_svg__a" d="M4.5 16.247L0.75 12.497 4.5 8.747" />,
  );

export default KeyboardArrowLeft;
