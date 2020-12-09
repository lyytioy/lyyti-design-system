import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSuperscript = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".superscript_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="superscript_svg__a"
      d="M18.531 4.491a2.478 2.478 0 114.485 1.559L18.5 12.5h4.962M.5 7.498l16 16M16.5 7.498l-16 16"
    />
  );

export default SvgSuperscript;
