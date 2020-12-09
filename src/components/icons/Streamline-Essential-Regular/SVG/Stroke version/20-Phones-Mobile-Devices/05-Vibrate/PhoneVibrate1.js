import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneVibrate1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-vibrate-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="phone-vibrate-1_svg__a"
      x={5.25}
      y={0.75}
      width={13.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path
      className="phone-vibrate-1_svg__a"
      d="M5.25 18.75h13.5M23.25 3.75v10.5M.75 9.75v10.5"
    />
  );

export default SvgPhoneVibrate1;
