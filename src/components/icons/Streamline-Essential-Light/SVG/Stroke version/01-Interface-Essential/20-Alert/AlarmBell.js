import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBell = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alarm-bell_svg__a"
      d="M20.5 17.5V11a8.5 8.5 0 00-5.541-7.959 3 3 0 00-5.922 0A8.493 8.493 0 003.5 11v6.5a3 3 0 01-3 3h23a3 3 0 01-3-3zM15 20.5a3 3 0 11-6 0"
    />
  );

export default SvgAlarmBell;
