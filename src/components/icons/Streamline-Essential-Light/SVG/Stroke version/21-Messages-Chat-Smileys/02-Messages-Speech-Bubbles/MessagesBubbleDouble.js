import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-double_svg__a"
      d="M9.5 16.5c0 4.288 5 7.5 9.5 5.5l4 1.5-1.5-3a4.994 4.994 0 002-4c0-3.154-3.134-6-7-6s-7 2.846-7 6z"
    />,
    <path
      className="messages-bubble-double_svg__a"
      d="M17.4 8.5a5.822 5.822 0 00.1-1c0-3.866-3.8-7-8.5-7S.5 3.634.5 7.5a6.434 6.434 0 002.517 4.97L1 16l4.939-1.976a9.993 9.993 0 001.561.361"
    />
  );

export default SvgMessagesBubbleDouble;
