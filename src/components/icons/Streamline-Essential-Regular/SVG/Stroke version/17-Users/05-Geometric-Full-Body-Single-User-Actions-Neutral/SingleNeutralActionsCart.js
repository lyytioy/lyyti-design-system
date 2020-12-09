import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-cart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-cart_svg__cls-1"
      d="M23.25 12l-2.821 7.756a.751.751 0 01-.7.494h-5.372a.752.752 0 01-.69-.455L12.06 15.3a.749.749 0 01.69-1.045h9.681M15.375 22.5a.375.375 0 11-.375.375.375.375 0 01.375-.375M19.125 22.5a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle
      className="single-neutral-actions-cart_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-actions-cart_svg__cls-1"
      d="M10.555 10.888A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.323-3.233"
    />
  );

export default SvgSingleNeutralActionsCart;
