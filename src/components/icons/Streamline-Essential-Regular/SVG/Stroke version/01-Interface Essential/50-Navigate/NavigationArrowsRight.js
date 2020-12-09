import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-right_svg__a"
      d="M.751 1.5a.75.75 0 011.3-.511l8.8 9.987a1.5 1.5 0 010 2.047l-8.8 9.986a.75.75 0 01-1.3-.512z"
    />,
    <path
      className="navigation-arrows-right_svg__a"
      d="M6.751 17.671V22.5a.75.75 0 001.3.512l8.8-9.986a1.5 1.5 0 000-2.047L8.049.987a.75.75 0 00-1.3.511v4.826"
    />,
    <path
      className="navigation-arrows-right_svg__a"
      d="M12.751 17.671V22.5a.75.75 0 001.3.512l8.8-9.986a1.5 1.5 0 000-2.047L14.049.987a.75.75 0 00-1.3.511v4.826"
    />
  );

export default SvgNavigationArrowsRight;
