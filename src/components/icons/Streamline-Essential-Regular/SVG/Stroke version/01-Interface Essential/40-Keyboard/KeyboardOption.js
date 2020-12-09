import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardOption = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-option_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-option_svg__a"
      x={1.5}
      y={1.497}
      width={21}
      height={21}
      rx={3}
      ry={3}
    />,
    <path
      className="keyboard-option_svg__a"
      d="M18 10.497h-4.5M6 10.497h3l3 4.5h6"
    />
  );

export default SvgKeyboardOption;
