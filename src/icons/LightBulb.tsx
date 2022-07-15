import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const LightBulb = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.light_bulb{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}'
        }
      </style>
    </defs>,
    <path
      className="light_bulb"
      d="M16 12C15 13 15 15 15 16C15 17 14 17 14 17H10C10 17 9 17 9 16C9 15 9 13 8 12C5.67396 9.67396 5.41422 6.10051 7.75736 3.75736C10.1005 1.41421 13.8995 1.41421 16.2426 3.75736C18.5858 6.10051 18.4069 9.59315 16 12Z"
    />,
    <path className="light_bulb" d="M10 21H14Z" />,
    <path className="light_bulb" d="M10 21H14" />
  );

export default LightBulb;
