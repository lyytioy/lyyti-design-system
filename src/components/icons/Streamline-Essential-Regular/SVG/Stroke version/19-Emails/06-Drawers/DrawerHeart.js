import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="drawer-heart_svg__a"
      d="M17.168 15.75a5.951 5.951 0 01-10.336 0H3a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5zM19.5 12.75V2.25A1.5 1.5 0 0018 .75H6a1.5 1.5 0 00-1.5 1.5v10.5"
    />,
    <path
      className="drawer-heart_svg__a"
      d="M15.93 5.345a1.9 1.9 0 00-2.751 0L12 6.564l-1.179-1.219a1.9 1.9 0 00-2.751 0 2.06 2.06 0 000 2.845l3.511 3.631a.579.579 0 00.838 0L15.93 8.19a2.06 2.06 0 000-2.845z"
    />
  );

export default SvgDrawerHeart;
