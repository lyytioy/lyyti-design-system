import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="vintage-camera_svg__a"
      x={3.75}
      y={3.75}
      width={15}
      height={19.5}
      rx={1}
      ry={1}
    />,
    <path
      className="vintage-camera_svg__a"
      d="M6.75 3.75L8.127 1.3A1.146 1.146 0 019.133.75h4.234a1.146 1.146 0 011.006.553L15.75 3.75"
    />,
    <circle className="vintage-camera_svg__a" cx={11.25} cy={8.25} r={1.5} />,
    <circle className="vintage-camera_svg__a" cx={11.25} cy={16.5} r={3.75} />,
    <path
      className="vintage-camera_svg__a"
      d="M.75 6v3M.75 7.5h3M18.75 19.5h1.989a1.011 1.011 0 001.011-1.011V12.75h1.5"
    />
  );

export default SvgVintageCamera;
