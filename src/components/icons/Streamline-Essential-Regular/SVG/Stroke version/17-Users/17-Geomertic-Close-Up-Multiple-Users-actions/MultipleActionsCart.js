import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-cart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-cart_svg__cls-1"
      d="M10.781 10.513A6.048 6.048 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-cart_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-cart_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-cart_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.284-.71M23.25 12l-2.821 7.756a.751.751 0 01-.7.494h-5.372a.752.752 0 01-.69-.455L12.06 15.3a.749.749 0 01.69-1.045h9.681M15.375 22.5a.375.375 0 11-.375.375.375.375 0 01.375-.375M19.125 22.5a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgMultipleActionsCart;
