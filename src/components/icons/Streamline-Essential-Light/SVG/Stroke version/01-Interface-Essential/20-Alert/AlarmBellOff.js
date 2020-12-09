import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBellOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alarm-bell-off_svg__a"
      d="M.5 23.501l23-23M14 18.5a2 2 0 01-4 0M14.946 6.226c-.146-.075-.291-.161-.446-.226a2.5 2.5 0 10-5 0 6.5 6.5 0 00-4 6v3.672"
    />,
    <path
      className="alarm-bell-off_svg__a"
      d="M8.328 18.5H20.5a2 2 0 01-2-2V12a6.461 6.461 0 00-.718-2.954"
    />
  );

export default SvgAlarmBellOff;
