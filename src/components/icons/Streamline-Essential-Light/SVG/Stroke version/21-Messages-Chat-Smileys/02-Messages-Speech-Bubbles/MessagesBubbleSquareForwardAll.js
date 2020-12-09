import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareForwardAll = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-forward-all_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-forward-all_svg__a"
      d="M19 12l4.5 3.5L19 19"
    />,
    <path
      className="messages-bubble-square-forward-all_svg__a"
      d="M15.5 12l4.5 3.5-4.5 3.5"
    />,
    <path
      className="messages-bubble-square-forward-all_svg__a"
      d="M20 15.5h-3.5a6 6 0 00-6 6v2M12.5 14.5h-4l-4 4v-4h-3a1 1 0 01-1-1v-12a1 1 0 011-1h19a1 1 0 011 1v9"
    />
  );

export default SvgMessagesBubbleSquareForwardAll;
