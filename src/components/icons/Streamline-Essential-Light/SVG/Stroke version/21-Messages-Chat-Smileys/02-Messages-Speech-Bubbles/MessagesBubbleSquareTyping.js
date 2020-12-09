import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareTyping = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-typing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-typing_svg__a"
      d="M.5 16.5a1 1 0 001 1h2v4l4-4h15a1 1 0 001-1v-13a1 1 0 00-1-1h-21a1 1 0 00-1 1z"
    />,
    <path
      className="messages-bubble-square-typing_svg__a"
      d="M7.25 9.75A.25.25 0 117 10a.25.25 0 01.25-.25M12 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M16.75 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgMessagesBubbleSquareTyping;
