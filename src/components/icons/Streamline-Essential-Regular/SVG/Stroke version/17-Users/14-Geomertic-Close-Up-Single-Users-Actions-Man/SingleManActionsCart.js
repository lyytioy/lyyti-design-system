import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-cart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-cart_svg__cls-1"
      d="M10.508 11.211A6.675 6.675 0 007.5 10.5a6.75 6.75 0 00-6.75 6.75M3.945 2.781a6.848 6.848 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-cart_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-man-actions-cart_svg__cls-1"
      d="M23.25 12l-2.821 7.756a.751.751 0 01-.7.494h-5.372a.752.752 0 01-.69-.455L12.06 15.3a.749.749 0 01.69-1.045h9.681M15.375 22.5a.375.375 0 11-.375.375.375.375 0 01.375-.375M19.125 22.5a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgSingleManActionsCart;
