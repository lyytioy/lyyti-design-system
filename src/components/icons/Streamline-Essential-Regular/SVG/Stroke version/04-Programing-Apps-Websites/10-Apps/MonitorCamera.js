import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="monitor-camera_svg__a" d="M8.25 23.253h7.5" />,
    <rect
      className="monitor-camera_svg__a"
      x={0.75}
      y={0.753}
      width={22.5}
      height={18}
      rx={3}
      ry={3}
    />,
    <path
      className="monitor-camera_svg__a"
      d="M12 18.753v4.5M.75 15.003h22.5M17.25 5.128L15 6.045v-.917a1.376 1.376 0 00-1.375-1.375h-5.5A1.376 1.376 0 006.75 5.128v5.5A1.375 1.375 0 008.125 12h5.5A1.375 1.375 0 0015 10.628v-.916l2.25.916z"
    />
  );

export default SvgMonitorCamera;
