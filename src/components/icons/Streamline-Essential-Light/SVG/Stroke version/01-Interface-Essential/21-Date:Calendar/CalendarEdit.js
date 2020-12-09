import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-edit_svg__a"
      x={0.5}
      y={2.501}
      width={23}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="calendar-edit_svg__a"
      d="M5.5.501v5M18.5.501v5M.5 7.501h23M16.484 14.017l-6.359 6.359L7 21l.625-3.125 6.359-6.359a1.762 1.762 0 012.492 0l.008.007a1.764 1.764 0 010 2.494z"
    />
  );

export default SvgCalendarEdit;
