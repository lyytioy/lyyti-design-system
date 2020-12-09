import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardPowerOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-power-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-power-off_svg__a"
      d="M6 5.997l6 6M6 8.997v-3h3"
    />,
    <rect
      className="keyboard-power-off_svg__a"
      x={1.5}
      y={1.497}
      width={21}
      height={21}
      rx={3}
      ry={3}
    />,
    <path className="keyboard-power-off_svg__a" d="M12 6a6 6 0 11-6 6" />
  );

export default SvgKeyboardPowerOff;
