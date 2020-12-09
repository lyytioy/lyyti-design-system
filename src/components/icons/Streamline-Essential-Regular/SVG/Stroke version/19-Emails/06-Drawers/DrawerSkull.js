import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-skull_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="drawer-skull_svg__a"
      d="M17.168 15.75a5.951 5.951 0 01-10.336 0H3a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5zM19.5 12.75V2.25A1.5 1.5 0 0018 .75H6a1.5 1.5 0 00-1.5 1.5v10.5"
    />,
    <path
      className="drawer-skull_svg__a"
      d="M9 12.75V10.5l-.158-.079A2.426 2.426 0 017.5 8.25a4.5 4.5 0 019 0 2.426 2.426 0 01-1.342 2.171L15 10.5v2.25M12 11.25v1.5"
    />,
    <path
      className="drawer-skull_svg__a"
      d="M10.125 7.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M13.875 7.5a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgDrawerSkull;
