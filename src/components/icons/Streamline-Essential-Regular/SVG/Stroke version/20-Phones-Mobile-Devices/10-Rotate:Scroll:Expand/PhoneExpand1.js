import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneExpand1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-expand-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="phone-expand-1_svg__a"
      x={8.251}
      y={5.25}
      width={7.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="phone-expand-1_svg__a"
      d="M15.751 15.75h-7.5M10.501 2.25l1.5-1.5 1.5 1.5M10.501 21.75l1.5 1.5 1.5-1.5M20.251 10.5l1.5 1.5-1.5 1.5M3.751 10.5l-1.5 1.5 1.5 1.5"
    />
  );

export default SvgPhoneExpand1;
