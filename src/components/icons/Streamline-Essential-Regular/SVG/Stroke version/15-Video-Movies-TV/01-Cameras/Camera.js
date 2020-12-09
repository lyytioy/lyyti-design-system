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
      x={7.5}
      y={12.75}
      width={10.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="camera_svg__a"
      d="M18 15l3-1.5v6L18 18v-3zM9.75 23.25l3-3 3 3"
    />,
    <circle className="camera_svg__a" cx={7.5} cy={5.25} r={4.5} />,
    <circle className="camera_svg__a" cx={18} cy={6.75} r={3} />
  );

export default SvgCamera;
