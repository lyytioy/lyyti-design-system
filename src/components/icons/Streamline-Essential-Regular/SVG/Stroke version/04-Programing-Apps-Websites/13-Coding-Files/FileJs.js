import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileJs = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-js_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-js_svg__a"
      d="M10.5 23.253H2.25a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.061.44l5.871 5.871a1.5 1.5 0 01.439 1.061v4.628"
    />,
    <path
      className="file-js_svg__a"
      d="M20.25 8.253h-6a1.5 1.5 0 01-1.5-1.5v-6M17.25 15.753v6a1.5 1.5 0 01-1.5 1.5h-1.5M23.25 15.753h-1.5a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5h-1.5"
    />
  );

export default SvgFileJs;
