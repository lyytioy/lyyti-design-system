import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="camera_svg__a"
      x={0.75}
      y={5.25}
      width={22.5}
      height={15}
      rx={3}
      ry={3}
    />,
    <circle className="camera_svg__a" cx={15.75} cy={12.75} r={4.5} />,
    <path
      className="camera_svg__a"
      d="M.75 12.75H7.5M11.25 12.75h9M.75 9.75H7.5M.75 15.75H7.5M5.25 5.25v-1.5"
    />
  );

export default SvgCamera;
