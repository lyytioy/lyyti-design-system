import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchBar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-bar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="search-bar_svg__a"
      d="M4.125 8.625A.375.375 0 104.5 9a.374.374 0 00-.375-.375M7.875 8.625A.375.375 0 108.25 9a.374.374 0 00-.375-.375"
    />,
    <path
      className="search-bar_svg__a"
      d="M21.75 6.75v-1.5a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5H7.5"
    />,
    <circle className="search-bar_svg__a" cx={15.75} cy={12.75} r={5.25} />,
    <path className="search-bar_svg__a" d="M23.25 20.25l-3.788-3.788" />
  );

export default SvgSearchBar;
