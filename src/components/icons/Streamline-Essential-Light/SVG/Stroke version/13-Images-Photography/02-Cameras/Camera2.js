import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCamera2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-2_svg__a"
      d="M17.466 19.5H21.5a2 2 0 002-2V9.117a2 2 0 00-1.581-1.956l-4.126-.884"
    />,
    <rect
      className="camera-2_svg__a"
      x={0.5}
      y={6.5}
      width={5}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="camera-2_svg__a"
      d="M10.192 6.327L5.5 7.5M18.725 9.536l-1.311-4.585A2 2 0 0015.491 3.5h-2.982a2 2 0 00-1.923 1.451L9.275 9.536M10.435 5.5h7.136"
    />,
    <circle className="camera-2_svg__a" cx={14} cy={14} r={6.5} />,
    <circle className="camera-2_svg__a" cx={14} cy={14} r={4.5} />,
    <path className="camera-2_svg__a" d="M5.5 19.5h5.034" />
  );

export default SvgCamera2;
