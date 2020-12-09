import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRb = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rb_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="rb_svg__a"
      d="M1.502 3.753h21M1.502 20.253h21M7.502 15.753v-7.5M7.5 8.253h1.127a1.875 1.875 0 110 3.75H7.5M10.502 15.753l-2.25-3.75M13.502 15.753v-7.5M13.5 8.253H15a1.5 1.5 0 011.5 1.5v.75A1.5 1.5 0 0115 12h-1.5"
    />,
    <path
      className="rb_svg__a"
      d="M13.5 12H15a1.5 1.5 0 011.5 1.5v.75a1.5 1.5 0 01-1.5 1.5h-1.5"
    />
  );

export default SvgRb;
