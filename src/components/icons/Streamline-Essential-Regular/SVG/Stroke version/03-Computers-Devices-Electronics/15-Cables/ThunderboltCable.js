import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgThunderboltCable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".thunderbolt-cable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="thunderbolt-cable_svg__a"
      d="M17.25 20.25h4.5v3h-4.5zM23.25 20.25h-7.5v-5.924a1.5 1.5 0 011.5-1.5h4.5a1.5 1.5 0 011.5 1.5zM2.25.75h4.5v3h-4.5zM8.25 3.75H.75v6.076a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5z"
    />,
    <path
      className="thunderbolt-cable_svg__a"
      d="M19.5 12.826V4.5a3.75 3.75 0 00-7.5 0v15a3.75 3.75 0 01-7.5 0v-8.174"
    />
  );

export default SvgThunderboltCable;
