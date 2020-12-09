import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="drawer-play_svg__a"
      d="M17.168 15.75a5.951 5.951 0 01-10.336 0H3a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5zM19.5 12.75V2.25A1.5 1.5 0 0018 .75H6a1.5 1.5 0 00-1.5 1.5v10.5"
    />,
    <path
      className="drawer-play_svg__a"
      d="M10.239 11.91A.857.857 0 019 11.144V5.356a.857.857 0 011.239-.766l5.788 2.9a.855.855 0 010 1.53z"
    />
  );

export default SvgDrawerPlay;
