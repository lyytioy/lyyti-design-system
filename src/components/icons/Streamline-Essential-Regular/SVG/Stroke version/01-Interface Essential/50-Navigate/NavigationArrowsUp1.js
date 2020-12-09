import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsUp1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-up-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-up-1_svg__a"
      d="M13.141 9.526a1.5 1.5 0 00-2.286 0l-9.75 11.25a1.5 1.5 0 001.143 2.471h19.5a1.5 1.5 0 001.143-2.471z"
    />,
    <path
      className="navigation-arrows-up-1_svg__a"
      d="M21 15h.75a1.5 1.5 0 001.143-2.471l-9.75-11.25a1.5 1.5 0 00-2.286 0l-9.75 11.25A1.5 1.5 0 002.248 15H3"
    />
  );

export default SvgNavigationArrowsUp1;
