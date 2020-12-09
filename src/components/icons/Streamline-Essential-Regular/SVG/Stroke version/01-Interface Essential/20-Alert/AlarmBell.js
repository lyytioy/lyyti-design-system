import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBell = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="alarm-bell_svg__a"
      d="M10 21.75a2.087 2.087 0 004.005 0M12 3V.75M12 3a7.5 7.5 0 017.5 7.5c0 7.046 1.5 8.25 1.5 8.25H3s1.5-1.916 1.5-8.25A7.5 7.5 0 0112 3z"
    />
  );

export default SvgAlarmBell;
