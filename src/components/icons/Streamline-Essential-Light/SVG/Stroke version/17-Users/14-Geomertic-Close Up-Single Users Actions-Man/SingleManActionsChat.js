import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-chat_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-chat_svg__cls-1"
      d="M22.5 20.5h-4.25l-3.344 2.675a.25.25 0 01-.406-.2V20.5h-2a1 1 0 01-1-1v-7a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1zM14.5 14.5h6M14.5 17.5h4M8.5 10.571a7.005 7.005 0 00-8 6.929h8M3.838 2.592A7.053 7.053 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-chat_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsChat;
