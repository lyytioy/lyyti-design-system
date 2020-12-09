import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBellCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alarm-bell-check_svg__a"
      d="M11 21.5a2 2 0 01-4 0M9.5 6.552A2.459 2.459 0 009 6.5 2.5 2.5 0 006.5 9a6.5 6.5 0 00-4 6v4.5a2 2 0 01-2 2h17a2 2 0 01-2-2V15a6.444 6.444 0 00-.059-.778M21.232 4.558l-4.095 4.357-2.925-2.84"
    />,
    <circle className="alarm-bell-check_svg__a" cx={17.5} cy={6.501} r={6} />
  );

export default SvgAlarmBellCheck;
