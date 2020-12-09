import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".php_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="php_svg__a"
      d="M1.502 3.753h21M1.502 20.253h21M4.502 15.753v-7.5M4.5 8.253h.75a2.25 2.25 0 010 4.5H4.5M16.502 15.753v-7.5M16.5 8.253h.75a2.25 2.25 0 010 4.5h-.75M10.502 15.753v-7.5M13.502 15.753v-7.5M10.502 12.753h3"
    />
  );

export default SvgPhp;
