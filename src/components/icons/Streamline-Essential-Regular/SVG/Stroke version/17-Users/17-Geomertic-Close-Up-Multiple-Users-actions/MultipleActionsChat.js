import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-chat_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-chat_svg__cls-1"
      d="M9.5 9.645A6.111 6.111 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-chat_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-chat_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-chat_svg__cls-1"
      d="M19.823 8.25a4.446 4.446 0 00-6.66 0M21.75 20.25h-3l-4.5 3v-3h-1.5a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5zM14.25 14.25h6M14.25 17.25h6"
    />
  );

export default SvgMultipleActionsChat;
