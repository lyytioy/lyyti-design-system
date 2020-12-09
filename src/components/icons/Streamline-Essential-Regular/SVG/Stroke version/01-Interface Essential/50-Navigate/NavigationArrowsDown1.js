import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsDown1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-down-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-down-1_svg__a"
      d="M10.858 14.468a1.5 1.5 0 002.285 0l9.75-11.25A1.5 1.5 0 0021.751.747h-19.5a1.5 1.5 0 00-1.143 2.471z"
    />,
    <path
      className="navigation-arrows-down-1_svg__a"
      d="M3 9h-.749a1.5 1.5 0 00-1.143 2.471l9.75 11.25a1.5 1.5 0 002.285 0l9.75-11.25A1.5 1.5 0 0021.751 9H21"
    />
  );

export default SvgNavigationArrowsDown1;
