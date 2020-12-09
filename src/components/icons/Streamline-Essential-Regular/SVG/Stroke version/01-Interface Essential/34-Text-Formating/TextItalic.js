import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextItalic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-italic_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="text-italic_svg__a"
      d="M23.25.748h-10.5M11.25 23.248H.75M6 23.248l12-22.5"
    />
  );

export default SvgTextItalic;
