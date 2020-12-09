import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneVibrate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-vibrate_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-vibrate_svg__a"
      d="M18.5 19.5h-13M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-vibrate_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-vibrate_svg__a"
      d="M.5 18.5L2 17 .5 15.5 2 14 .5 12.5 2 11 .5 9.5 2 8 .5 6.5 2 5 .5 3.5M23.5 18.5L22 17l1.5-1.5L22 14l1.5-1.5L22 11l1.5-1.5L22 8l1.5-1.5L22 5l1.5-1.5"
    />
  );

export default SvgPhoneVibrate;
