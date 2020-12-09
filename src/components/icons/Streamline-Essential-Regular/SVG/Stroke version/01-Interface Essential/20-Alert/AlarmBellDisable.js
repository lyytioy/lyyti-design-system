import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBellDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="alarm-bell-disable_svg__a" cx={17.25} cy={6.75} r={6} />,
    <path
      className="alarm-bell-disable_svg__a"
      d="M15.375 8.625l3.75-3.75M19.125 8.625l-3.75-3.75M7.748 21.75a2.087 2.087 0 004.005 0M17.505 15.862a7.369 7.369 0 001.245 2.888h-18s1.5-2.329 1.5-8.25A7.5 7.5 0 019.75 3V.75"
    />
  );

export default SvgAlarmBellDisable;
