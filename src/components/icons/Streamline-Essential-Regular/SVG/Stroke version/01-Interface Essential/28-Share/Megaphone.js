import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMegaphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".megaphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="megaphone_svg__a"
      d="M6.75 15.25H4.5a3.75 3.75 0 010-7.5h2.25zM6.75 15.25a22.3 22.3 0 0112.366 3.744l1.134.756V3.25l-1.134.756A22.3 22.3 0 016.75 7.75zM23.25 10v3M6.75 15.25A7.239 7.239 0 009 20.5"
    />
  );

export default SvgMegaphone;
