import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const CalendarDate = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.calendar-date_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="calendar-date_svg__a"
      d="M6.75 12.75h.75a.75.75 0 01.75.75v5.25M6.75 18.75h3M13.832 12.75h1.918a.751.751 0 01.7 1.014l-1.87 4.986"
    />,
    <rect
      className="calendar-date_svg__a"
      x={0.75}
      y={3.75}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="calendar-date_svg__a" d="M.75 9.75h22.5M6.75 6V.75M17.25 6V.75" />
  );

export default CalendarDate;
