import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextItalic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-italic_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="text-italic_svg__a"
      d="M19.5.498l-15 23M.5 23.498h8M15.5.498h8"
    />
  );

export default SvgTextItalic;
