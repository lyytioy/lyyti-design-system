import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleForwardAll = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-forward-all_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-forward-all_svg__a"
      d="M16.5.75l3 3-3 3"
    />,
    <path
      className="messages-bubble-forward-all_svg__a"
      d="M9.75 9.75a6 6 0 016-6h3.75M20.25.75l3 3-3 3"
    />,
    <path
      className="messages-bubble-forward-all_svg__a"
      d="M8.249 4.222a9.086 9.086 0 00-4.827 13.416L.75 23.25l5.611-2.672A9.088 9.088 0 0020.25 12.85"
    />
  );

export default SvgMessagesBubbleForwardAll;
