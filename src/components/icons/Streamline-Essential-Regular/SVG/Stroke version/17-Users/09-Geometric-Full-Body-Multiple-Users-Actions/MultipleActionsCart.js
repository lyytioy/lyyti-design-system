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
      d="M23.25 12l-2.82 7.756a.752.752 0 01-.7.494h-5.372a.751.751 0 01-.69-.455l-1.607-4.5a.749.749 0 01.689-1.045h9.682M15.375 22.5a.375.375 0 11-.375.375.374.374 0 01.375-.375M19.125 22.5a.375.375 0 11-.375.375.374.374 0 01.375-.375"
    />,
    <circle
      className="multiple-actions-cart_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-cart_svg__cls-1"
      d="M10.555 10.888A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.324-3.233"
    />,
    <circle
      className="multiple-actions-cart_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-cart_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />
  );

export default SvgMultipleActionsCart;
