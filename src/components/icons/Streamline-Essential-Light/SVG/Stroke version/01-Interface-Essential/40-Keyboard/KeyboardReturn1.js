import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardReturn1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-return-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-return-1_svg__a"
      x={0.5}
      y={0.497}
      width={23}
      height={23}
      rx={4}
      ry={4}
    />,
    <path
      className="keyboard-return-1_svg__a"
      d="M18.499 11.497h-9M12.5 14.497l-3.001-3 3.001-3M6.5 8.497v6"
    />
  );

export default SvgKeyboardReturn1;
