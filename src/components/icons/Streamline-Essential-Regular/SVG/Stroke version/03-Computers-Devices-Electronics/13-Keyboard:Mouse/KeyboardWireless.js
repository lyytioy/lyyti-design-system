import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardWireless = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-wireless_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-wireless_svg__a"
      x={0.75}
      y={11.25}
      width={22.5}
      height={12}
      rx={3}
      ry={3}
    />,
    <path
      className="keyboard-wireless_svg__a"
      d="M6.75 14.25h1.5M15.75 14.25h1.5M11.25 14.25h1.5M4.5 17.25H6M9 17.25h1.5M13.5 17.25H15M18 17.25h1.5M6.75 20.25h10.5M15.164 7.572a6.5 6.5 0 00-6.329 0M16.744 4.986a9.724 9.724 0 00-9.489 0M18.307 2.429a12.687 12.687 0 00-12.615 0"
    />
  );

export default SvgKeyboardWireless;
