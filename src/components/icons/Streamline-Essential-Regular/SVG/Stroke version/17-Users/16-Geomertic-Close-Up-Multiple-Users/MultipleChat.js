import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-chat_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-chat_svg__cls-1"
      d="M21.75 8.25H13.5L12 9.749l-1.5-1.5H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v4.5a1.5 1.5 0 01-1.5 1.5z"
    />,
    <circle
      className="multiple-chat_svg__cls-1"
      cx={3.375}
      cy={16.875}
      r={2.625}
    />,
    <path
      className="multiple-chat_svg__cls-1"
      d="M7.514 22.983A4.5 4.5 0 00.75 21.1"
    />,
    <circle
      className="multiple-chat_svg__cls-1"
      cx={20.625}
      cy={16.875}
      r={2.625}
    />,
    <path
      className="multiple-chat_svg__cls-1"
      d="M16.486 22.983A4.5 4.5 0 0123.25 21.1"
    />,
    <circle
      className="multiple-chat_svg__cls-1"
      cx={12}
      cy={16.125}
      r={3.375}
    />,
    <path
      className="multiple-chat_svg__cls-1"
      d="M16.714 23.249a6.066 6.066 0 00-9.429 0"
    />
  );

export default SvgMultipleChat;
