import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeShine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-shine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="like-shine_svg__a"
      d="M.5 12.5h2a7.949 7.949 0 007.5-8c0-1.581 3-1.781 3 1.219a31.593 31.593 0 01-1 5.781h8a1.5 1.5 0 010 3h-1a1.5 1.5 0 010 3h-1M18 17.5a1.5 1.5 0 010 3h-1a1.5 1.5 0 010 3h-6.5c-4 0-2-2-10-2M3.5 7.5v-2M2.5 6.5h2M7.5 2.5v-2M6.5 1.5h2M17.5 4.5v-2M16.5 3.5h2M22.5 9.5v-2M21.5 8.5h2"
    />
  );

export default SvgLikeShine;
