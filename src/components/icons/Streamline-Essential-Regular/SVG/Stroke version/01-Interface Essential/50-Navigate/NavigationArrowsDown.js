import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-down_svg__a"
      d="M1.5.747a.75.75 0 00-.512 1.3l9.988 8.8a1.5 1.5 0 002.047 0l9.986-8.8a.75.75 0 00-.509-1.3z"
    />,
    <path
      className="navigation-arrows-down_svg__a"
      d="M17.674 6.747H22.5a.75.75 0 01.512 1.3l-9.986 8.8a1.5 1.5 0 01-2.047 0L.99 8.045a.75.75 0 01.512-1.3h4.826"
    />,
    <path
      className="navigation-arrows-down_svg__a"
      d="M17.674 12.747H22.5a.75.75 0 01.512 1.3l-9.986 8.8a1.5 1.5 0 01-2.047 0L.99 14.045a.75.75 0 01.512-1.3h4.826"
    />
  );

export default SvgNavigationArrowsDown;
