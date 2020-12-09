import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowNext = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-next_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-next_svg__a"
      d="M21.76 10.5V2.253a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6.751M.76 5.253h21M20.261 14.253l3 3-3 3"
    />,
    <path
      className="app-window-next_svg__a"
      d="M12.76 23.253a6 6 0 016-6h4.5"
    />
  );

export default SvgAppWindowNext;
