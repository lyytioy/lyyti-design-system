import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="playlist-check_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="playlist-check_svg__a"
      d="M19.924 15.505l-2.905 3.874a.751.751 0 01-1.131.08l-1.5-1.5M20.25 8.25v-6a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h6"
    />,
    <circle
      className="playlist-check_svg__a"
      cx={6.375}
      cy={13.125}
      r={1.875}
    />,
    <path
      className="playlist-check_svg__a"
      d="M8.25 13.125V6.331a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423V8.25"
    />
  );

export default SvgPlaylistCheck;
