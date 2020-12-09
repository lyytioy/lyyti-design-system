import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-home_svg__a"
      d="M8.25 22.503h7.5M12 19.503v3M.75 15.753h22.5M15 6.503v5.5H9v-5.5"
    />,
    <path className="monitor-home_svg__a" d="M7.5 7.503l4.5-3 4.5 3" />,
    <rect
      className="monitor-home_svg__a"
      x={0.75}
      y={1.503}
      width={22.5}
      height={18}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgMonitorHome;
