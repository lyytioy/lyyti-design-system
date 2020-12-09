import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardWireless = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-wireless_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-wireless_svg__a"
      x={0.5}
      y={12.5}
      width={23}
      height={10}
      rx={2}
      ry={2}
    />,
    <path
      className="keyboard-wireless_svg__a"
      d="M18 3.317a10.815 10.815 0 00-12 0M16.588 5.435a8.267 8.267 0 00-9.176 0M15.177 7.553a5.727 5.727 0 00-6.354 0M4 19.5h1M4 17.5h1M7 17.5h1M10 17.5h1M13 17.5h1M16 17.5h1M19 17.5h1M4 15.5h1M7 15.5h1M10 15.5h1M13 15.5h1M16 15.5h1M19 15.5h1M7 19.5h10M19 19.5h1"
    />
  );

export default SvgKeyboardWireless;
