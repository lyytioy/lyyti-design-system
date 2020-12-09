import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-chat_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-chat_svg__cls-1"
      d="M22.5 13.5h-8a1 1 0 00-1 1v6a1 1 0 001 1h1v2l3-2h4a1 1 0 001-1v-6a1 1 0 00-1-1zM16.5 16.5h4M16.5 18.5h3M10.5 15.5H.5a6 6 0 0110.472-4"
    />,
    <circle
      className="multiple-actions-chat_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-chat_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-chat_svg__cls-1"
      d="M20.468 11.5A6 6 0 0013 10.305"
    />
  );

export default SvgMultipleActionsChat;
