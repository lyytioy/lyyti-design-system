import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindow1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-1_svg__a"
      d="M21.76 21.753a1.5 1.5 0 001.5-1.5V3.869a1.62 1.62 0 00-1.615-1.616H2.367A1.612 1.612 0 00.76 3.861v16.277a1.619 1.619 0 001.615 1.615zM.76 6.753h22.5M6.76 2.253v4.5M11.26 2.253v4.5"
    />
  );

export default SvgAppWindow1;
