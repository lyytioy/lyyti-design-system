import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-user_svg__a"
      d="M5 22.004h14M11.5 20.004v2M.5 16.004h23"
    />,
    <circle className="monitor-user_svg__a" cx={12} cy={6.754} r={2.25} />,
    <path
      className="monitor-user_svg__a"
      d="M16.5 13.5a4.644 4.644 0 00-9 0z"
    />,
    <rect
      className="monitor-user_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgMonitorUser;
