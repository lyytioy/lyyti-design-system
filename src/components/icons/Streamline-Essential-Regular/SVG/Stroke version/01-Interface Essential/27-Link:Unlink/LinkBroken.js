import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLinkBroken = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".link-broken_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="link-broken_svg__a"
      d="M8.25 5.249l-3-3M6.75 8.249h-1.5M11.25 3.749v-1.5M14.25 6.749h4.5a4.5 4.5 0 010 9h-4.5M4.72 11.415l-2.652 2.652a4.5 4.5 0 006.364 6.364l2.652-2.652"
    />
  );

export default SvgLinkBroken;
