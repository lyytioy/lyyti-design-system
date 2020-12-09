import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraRetro = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-retro_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="camera-retro_svg__a"
      x={0.75}
      y={5.25}
      width={22.5}
      height={16.5}
      rx={3}
      ry={3}
    />,
    <circle className="camera-retro_svg__a" cx={12} cy={14.25} r={4.5} />,
    <path
      className="camera-retro_svg__a"
      d="M16.244 15.75h7.006M.75 15.75h7.007M18.75 7.875a.375.375 0 11-.375.375.375.375 0 01.375-.375M4.5 8.25h2.25M18 2.25h-3a.75.75 0 00-.75.75v2.25h4.5V3a.75.75 0 00-.75-.75z"
    />
  );

export default SvgCameraRetro;
