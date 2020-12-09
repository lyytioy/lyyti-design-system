import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCaps = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".caps_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="caps_svg__a"
      d="M.75 6.5A2.25 2.25 0 013 4.248h7.5M6.75 4.248v15M3.75 19.248h6M13.5 4.248H21A2.25 2.25 0 0123.25 6.5M17.25 4.248v15M14.25 19.248h6"
    />
  );

export default SvgCaps;
