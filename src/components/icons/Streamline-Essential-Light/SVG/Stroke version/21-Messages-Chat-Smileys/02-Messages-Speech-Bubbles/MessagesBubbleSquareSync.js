import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-sync_svg__a"
      d="M15 18.5h-3.5V22M22.917 19.733A5.572 5.572 0 0112.1 18.5M20 16.5h3.5V13M12.083 15.267A5.572 5.572 0 0122.9 16.5"
    />,
    <path
      className="messages-bubble-square-sync_svg__a"
      d="M9.5 14.5h-1l-4 4v-4h-3a1 1 0 01-1-1v-12a1 1 0 011-1h19a1 1 0 011 1v8"
    />
  );

export default SvgMessagesBubbleSquareSync;
