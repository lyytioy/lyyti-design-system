import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardAlt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-alt_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-alt_svg__a"
      d="M18 14.997v-6M16.5 8.997h3M12 9v4.5a1.5 1.5 0 001.5 1.5H15M6 15v-4.5a1.5 1.5 0 013 0V15M6 11.997h3"
    />,
    <rect
      className="keyboard-alt_svg__a"
      x={1.5}
      y={1.497}
      width={21}
      height={21}
      rx={3}
      ry={3}
    />
  );

export default SvgKeyboardAlt;
