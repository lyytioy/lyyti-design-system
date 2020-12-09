import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneVibrate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-vibrate_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="phone-vibrate_svg__a"
      x={5.25}
      y={0.75}
      width={13.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path
      className="phone-vibrate_svg__a"
      d="M5.25 18.75h13.5M.75 18l1.5-1.5L.75 15l1.5-1.5L.75 12l1.5-1.5L.75 9l1.5-1.5L.75 6l1.5-1.5L.75 3M23.25 18l-1.5-1.5 1.5-1.5-1.5-1.5 1.5-1.5-1.5-1.5 1.5-1.5-1.5-1.5 1.5-1.5-1.5-1.5 1.5-1.5"
    />
  );

export default SvgPhoneVibrate;
