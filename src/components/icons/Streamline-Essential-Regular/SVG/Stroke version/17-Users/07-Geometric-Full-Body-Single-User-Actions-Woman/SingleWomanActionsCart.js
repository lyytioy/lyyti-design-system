import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-cart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-cart_svg__cls-1"
      d="M23.25 12l-2.821 7.756a.749.749 0 01-.7.494h-5.372a.752.752 0 01-.69-.454L12.06 15.3a.75.75 0 01.69-1.046h9.681M15.375 22.5a.375.375 0 11-.375.375.375.375 0 01.375-.375M19.125 22.5a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle
      className="single-woman-actions-cart_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-actions-cart_svg__cls-1"
      d="M10.744 11.25a5.281 5.281 0 00-1.859-2.136L6 13.5 3.114 9.114A5.246 5.246 0 00.75 13.5v2.25H3l.75 7.5h4.5l.75-7.5M3 3.75S3 7.5.75 7.5M9 3.75S9 7.5 11.25 7.5"
    />
  );

export default SvgSingleWomanActionsCart;
