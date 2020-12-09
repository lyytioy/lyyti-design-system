import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareForward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-forward_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-forward_svg__a"
      d="M18.813 12l4.5 3.5-4.5 3.5"
    />,
    <path
      className="messages-bubble-square-forward_svg__a"
      d="M23.313 15.5h-3.5a6 6 0 00-6 6v2M14.312 14.5h-5.5l-4 4v-4h-3a1 1 0 01-1-1v-12a1 1 0 011-1h19a1 1 0 011 1v9"
    />
  );

export default SvgMessagesBubbleSquareForward;
