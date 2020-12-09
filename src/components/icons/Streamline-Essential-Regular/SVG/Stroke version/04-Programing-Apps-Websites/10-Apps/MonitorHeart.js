import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-heart_svg__a"
      d="M8.25 22.503h7.5M12 19.503v3M.75 15.753h22.5"
    />,
    <rect
      className="monitor-heart_svg__a"
      x={0.75}
      y={1.503}
      width={22.5}
      height={18}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-heart_svg__a"
      d="M15.93 5.349a1.9 1.9 0 00-2.751 0L12 6.568l-1.179-1.219a1.9 1.9 0 00-2.751 0 2.059 2.059 0 000 2.844l3.511 3.631a.579.579 0 00.838 0l3.511-3.631a2.059 2.059 0 000-2.844z"
    />
  );

export default SvgMonitorHeart;
