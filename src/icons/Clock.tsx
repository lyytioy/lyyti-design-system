import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Clock = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.time-clock-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <circle className="time-clock-circle_svg__a" cx={12} cy={12} r={10.5} />,
    <path className="time-clock-circle_svg__a" d="M12 12V8.25M12 12l4.687 4.688" />
  );

export default Clock;
