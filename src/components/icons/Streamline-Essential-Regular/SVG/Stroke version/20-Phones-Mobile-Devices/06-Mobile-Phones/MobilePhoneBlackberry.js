import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMobilePhoneBlackberry = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mobile-phone-blackberry_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="mobile-phone-blackberry_svg__a"
      x={5.25}
      y={3.75}
      width={13.5}
      height={19.5}
      rx={3}
      ry={3}
    />,
    <path
      className="mobile-phone-blackberry_svg__a"
      d="M8.25 3.75v-3M10.125 15.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M14.25 15.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M10.125 19.125a.375.375 0 10.375.375.375.375 0 00-.375-.375M14.25 19.125a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.25 12.75h13.5"
    />
  );

export default SvgMobilePhoneBlackberry;
