import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-mail_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-mail_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-window-mail_svg__a"
      d="M1.51 6.753h21M18.01 11.253v6a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-6"
    />,
    <path
      className="app-window-mail_svg__a"
      d="M18.01 11.253a1.5 1.5 0 00-1.5-1.5h-9a1.5 1.5 0 00-1.5 1.5l5.205 3.254a1.5 1.5 0 001.59 0z"
    />
  );

export default SvgAppWindowMail;
