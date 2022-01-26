import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const LockShield = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.lock-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <rect
      className="lock-shield_svg__a"
      x={6.75}
      y={9.75}
      width={10.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="lock-shield_svg__a"
      d="M12 13.125a.375.375 0 10.375.375.374.374 0 00-.375-.375M8.25 9.75V7.5a3.75 3.75 0 017.5 0v2.25"
    />,
    <path
      className="lock-shield_svg__a"
      d="M12 23.25C5.324 21.469.75 17.51.75 10.5V.75h22.5v9.75c0 7.005-4.567 10.967-11.25 12.75z"
    />
  );

export default LockShield;
