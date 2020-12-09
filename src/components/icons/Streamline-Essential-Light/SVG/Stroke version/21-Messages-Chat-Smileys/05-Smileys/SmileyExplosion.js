import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyExplosion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-explosion_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-explosion_svg__a"
      d="M21.2 5a3.034 3.034 0 00-3.067-3 3.077 3.077 0 00-1.847.62 5.392 5.392 0 00-8.572 0A3.077 3.077 0 005.867 2 3.034 3.034 0 002.8 5M2.8 5a2.251 2.251 0 100 4.5h2.7M21.2 5a2.251 2.251 0 110 4.5h-2.7M8.5 7.5v1.866A3.134 3.134 0 015.366 12.5M15.5 7.5v1.866a3.134 3.134 0 003.134 3.134M10.5 8.5v2M13.5 8.5v2M8.5 15.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5 15.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M12 17.5a1.5 1.5 0 00-1.5 1.5v1a1.5 1.5 0 003 0v-1a1.5 1.5 0 00-1.5-1.5z"
    />,
    <path
      className="smiley-explosion_svg__a"
      d="M18.634 12.5s-.634 1-6.634 1-6.634-1-6.634-1a7.5 7.5 0 1013.268 0z"
    />
  );

export default SvgSmileyExplosion;
