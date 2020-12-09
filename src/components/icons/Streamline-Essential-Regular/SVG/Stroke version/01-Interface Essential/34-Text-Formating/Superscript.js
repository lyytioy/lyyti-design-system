import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSuperscript = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".superscript_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="superscript_svg__a"
      d="M.75 7.498l15.75 15.75M16.5 7.498L.75 23.248M20.25 2.248a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 2.138 2.138 0 01-.468 1.335L20.25 6.748h3"
    />
  );

export default SvgSuperscript;
