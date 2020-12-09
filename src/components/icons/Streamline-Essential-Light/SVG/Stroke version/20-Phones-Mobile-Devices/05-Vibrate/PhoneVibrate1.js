import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneVibrate1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-vibrate-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="phone-vibrate-1_svg__a"
      x={6.5}
      y={3.5}
      width={11}
      height={17}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="phone-vibrate-1_svg__a"
      d="M6.5 7.5h11M6.5 17.5h11M9.5 5.5h5M3.5 7.5v12M.5 8.5v10M20.5 5.5v12M23.5 6.5v10"
    />
  );

export default SvgPhoneVibrate1;
