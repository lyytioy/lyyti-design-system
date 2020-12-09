import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBellRing1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell-ring-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alarm-bell-ring-1_svg__a"
      d="M18 13.5a6 6 0 00-12 0V19a1.5 1.5 0 01-1.5 1.5h15A1.5 1.5 0 0118 19zM13.415 22.5a1.5 1.5 0 01-2.829 0M12 5.501v2M8.5 4A4.5 4.5 0 004 8.5M.5 8.5a8 8 0 018-8M15.5 4A4.5 4.5 0 0120 8.5M23.5 8.5a8 8 0 00-8-8"
    />
  );

export default SvgAlarmBellRing1;
