import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Mobile = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.mobile-phone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <rect
      className="mobile-phone_svg__a"
      x={5.251}
      y={0.75}
      width={13.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path className="mobile-phone_svg__a" d="M5.251 18.75h13.5" />
  );

export default Mobile;
