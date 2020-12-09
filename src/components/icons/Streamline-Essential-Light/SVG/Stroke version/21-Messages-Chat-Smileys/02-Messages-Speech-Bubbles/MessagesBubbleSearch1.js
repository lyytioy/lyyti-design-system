import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSearch1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-search-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-search-1_svg__a"
      d="M9.5 16l-2 2v-4H7A6.519 6.519 0 01.5 7.5c0-3.575 2.925-7 6.5-7h8c3.575 0 6.5 3.425 6.5 7A6.454 6.454 0 0121 10M23.5 23.5l-3.578-3.578"
    />,
    <circle
      className="messages-bubble-search-1_svg__a"
      cx={17}
      cy={16.5}
      r={4.5}
    />
  );

export default SvgMessagesBubbleSearch1;
