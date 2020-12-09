import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-chat_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-chat_svg__cls-1"
      d="M3.945 2.781a6.848 6.848 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-chat_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-man-actions-chat_svg__cls-1"
      d="M8.25 10.558a6.409 6.409 0 00-.75-.058 6.75 6.75 0 00-6.75 6.75M21.75 20.25h-3l-4.5 3v-3h-1.5a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5zM14.25 14.25h6M14.25 17.25h6"
    />
  );

export default SvgSingleManActionsChat;
