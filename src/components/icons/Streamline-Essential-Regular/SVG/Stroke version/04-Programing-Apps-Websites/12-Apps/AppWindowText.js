import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-text_svg__a"
      d="M2.26 21.753a1.5 1.5 0 01-1.5-1.5V3.869a1.62 1.62 0 011.615-1.616h19.278a1.612 1.612 0 011.607 1.608v16.277a1.619 1.619 0 01-1.615 1.615zM23.26 6.753H.76M17.26 2.253v4.5M12.76 2.253v4.5M6.01 10.503h1.5M6.01 13.503h1.5M6.01 16.503h1.5M10.51 10.503h7.5M10.51 13.503h7.5M10.51 16.503h7.5"
    />
  );

export default SvgAppWindowText;
