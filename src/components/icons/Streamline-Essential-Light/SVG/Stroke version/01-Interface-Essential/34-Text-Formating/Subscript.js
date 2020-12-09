import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSubscript = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".subscript_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="subscript_svg__a"
      d="M.5.498l16 16M16.5.498l-16 16M18.537 13.991a2.478 2.478 0 114.485 1.559L18.506 22h4.962"
    />
  );

export default SvgSubscript;
