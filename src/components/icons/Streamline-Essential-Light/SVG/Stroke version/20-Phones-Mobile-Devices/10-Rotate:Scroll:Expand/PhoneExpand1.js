import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneExpand1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-expand-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="phone-expand-1_svg__a"
      x={8.5}
      y={5.5}
      width={7}
      height={13}
      rx={1}
      ry={1}
    />,
    <path
      className="phone-expand-1_svg__a"
      d="M15.5 15.5h-7M9.5 3L12 .5 14.5 3M14.5 21L12 23.5 9.5 21M3 14.5L.5 12 3 9.5M21 9.5l2.5 2.5-2.5 2.5"
    />
  );

export default SvgPhoneExpand1;
