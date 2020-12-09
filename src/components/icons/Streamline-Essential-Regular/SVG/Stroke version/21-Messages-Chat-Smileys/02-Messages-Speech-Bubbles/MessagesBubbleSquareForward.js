import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareForward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-forward_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-forward_svg__a"
      d="M20.25 12.75v4.5a1.5 1.5 0 01-1.5 1.5H8.25l-4.5 4.5v-4.5h-1.5a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h8.25M20.25.75l3 3-3 3"
    />,
    <path
      className="messages-bubble-square-forward_svg__a"
      d="M12.749 9.75a6 6 0 016-6h4.5"
    />
  );

export default SvgMessagesBubbleSquareForward;
