import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="phone-horizontal_svg__a" d="M17.25 21.765v-4.5" />,
    <rect
      className="phone-horizontal_svg__a"
      x={14.25}
      y={6.736}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="phone-horizontal_svg__a"
      d="M18.75 2.236a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 10.14a.375.375 0 10.375.375.375.375 0 00-.375-.375M21.75 17.265v1.5a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6a3 3 0 013-3h7.5"
    />
  );

export default SvgPhoneHorizontal;
