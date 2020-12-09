import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardPowerOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-power-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-power-off_svg__a"
      x={0.499}
      y={0.497}
      width={23}
      height={23}
      rx={4}
      ry={4}
    />,
    <path
      className="keyboard-power-off_svg__a"
      d="M12 3.5A8.5 8.5 0 113.5 12M11.999 11.997L4.5 4.497M9 4.497H4.5v4.5"
    />
  );

export default SvgKeyboardPowerOff;
