import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-up_svg__a"
      d="M1.5 23.247a.75.75 0 01-.511-1.3l9.987-8.8a1.5 1.5 0 012.047 0l9.986 8.8a.75.75 0 01-.512 1.3z"
    />,
    <path
      className="navigation-arrows-up_svg__a"
      d="M17.672 17.247H22.5a.75.75 0 00.512-1.3l-9.986-8.8a1.5 1.5 0 00-2.047 0l-9.987 8.8a.75.75 0 00.511 1.3h4.822"
    />,
    <path
      className="navigation-arrows-up_svg__a"
      d="M17.671 11.247H22.5a.75.75 0 00.512-1.3l-9.986-8.8a1.5 1.5 0 00-2.047 0L.988 9.949a.75.75 0 00.511 1.3h4.826"
    />
  );

export default SvgNavigationArrowsUp;
