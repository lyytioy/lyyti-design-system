import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileRb = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-rb_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-rb_svg__a"
      d="M11.244 23.253h-9a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.44L19.8 7.064a1.5 1.5 0 01.44 1.061v4.628"
    />,
    <path
      className="file-rb_svg__a"
      d="M20.244 8.253h-6a1.5 1.5 0 01-1.5-1.5v-6M14.244 23.253v-7.5M14.244 15.753h1.125a1.875 1.875 0 010 3.75h-1.125M17.244 23.253l-2.25-3.75M20.244 23.253v-7.5M20.244 15.753h1.5a1.5 1.5 0 011.5 1.5V18a1.5 1.5 0 01-1.5 1.5h-1.5M20.244 19.5h1.5a1.5 1.5 0 011.5 1.5v.75a1.5 1.5 0 01-1.5 1.5h-1.5"
    />
  );

export default SvgFileRb;
