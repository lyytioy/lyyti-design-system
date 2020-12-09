import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgThunderboltCable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".thunderbolt-cable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="thunderbolt-cable_svg__a" d="M4.5 5.5v2M19.5 16.5v2" />,
    <rect
      className="thunderbolt-cable_svg__a"
      x={0.5}
      y={3.5}
      width={8}
      height={6}
      rx={1}
      ry={1}
    />,
    <path
      className="thunderbolt-cable_svg__a"
      d="M2 .5h5a.5.5 0 01.5.5v2.5h-6V1A.5.5 0 012 .5z"
    />,
    <rect
      className="thunderbolt-cable_svg__a"
      x={15.5}
      y={14.5}
      width={8}
      height={6}
      rx={1}
      ry={1}
      transform="rotate(180 19.5 17.5)"
    />,
    <path
      className="thunderbolt-cable_svg__a"
      d="M22 23.5h-5a.5.5 0 01-.5-.5v-2.5h6V23a.5.5 0 01-.5.5zM3.5 9.5h2v4h-2zM18.5 10.5h2v4h-2z"
    />,
    <path
      className="thunderbolt-cable_svg__a"
      d="M4.5 13.5v6a4 4 0 008 0V4a3.5 3.5 0 017 0v6.5"
    />
  );

export default SvgThunderboltCable;
