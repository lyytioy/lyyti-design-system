import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-shield_svg__a"
      d="M15 23.253H9l.75-4.5h4.5l.75 4.5zM6.75 23.253h10.5"
    />,
    <rect
      className="monitor-shield_svg__a"
      x={0.75}
      y={0.753}
      width={22.5}
      height={18}
      rx={3}
      ry={3}
    />,
    <path
      className="monitor-shield_svg__a"
      d="M17.25 9.753c0 2.722-2.683 5.1-5.25 5.625-2.567-.521-5.25-2.9-5.25-5.625V6.378a1.125 1.125 0 011.125-1.125h8.25a1.125 1.125 0 011.125 1.125z"
    />
  );

export default SvgMonitorShield;
