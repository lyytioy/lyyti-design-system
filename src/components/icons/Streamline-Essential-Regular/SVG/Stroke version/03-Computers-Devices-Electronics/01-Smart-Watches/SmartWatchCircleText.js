import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-text_svg__a"
      d="M4.137 6.969V2.25a1.5 1.5 0 011.5-1.5h3.75M13.137 17.031v4.719a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.72M22.137 4.5a3.749 3.749 0 00-3.75-3.75h-3a3.75 3.75 0 000 7.5h1.5l3 1.5V7.933a3.746 3.746 0 002.25-3.433z"
    />,
    <path
      className="smart-watch-circle-text_svg__a"
      d="M15.346 11.251a6.865 6.865 0 01.041.749 6.75 6.75 0 11-6.75-6.75"
    />
  );

export default SvgSmartWatchCircleText;
