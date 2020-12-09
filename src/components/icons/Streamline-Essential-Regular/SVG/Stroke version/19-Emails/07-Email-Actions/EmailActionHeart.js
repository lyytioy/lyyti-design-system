import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-heart_svg__a"
      d="M19.5 12.88V2.25A1.5 1.5 0 0018 .75H6a1.5 1.5 0 00-1.5 1.5v10.63"
    />,
    <path
      className="email-action-heart_svg__a"
      d="M21.284 11.465a.75.75 0 011.216.587v9.7a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5v-9.7a.75.75 0 011.216-.587l7.431 5.894a3 3 0 003.706 0z"
    />,
    <path
      className="email-action-heart_svg__a"
      d="M15.93 5.345a1.9 1.9 0 00-2.751 0L12 6.564l-1.179-1.219a1.9 1.9 0 00-2.751 0 2.06 2.06 0 000 2.845l3.511 3.631a.579.579 0 00.838 0L15.93 8.19a2.06 2.06 0 000-2.845z"
    />
  );

export default SvgEmailActionHeart;
