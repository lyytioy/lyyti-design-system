import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-chat_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-chat_svg__cls-1"
      d="M21.75 20.25h-3l-4.5 3v-3h-1.5a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5zM14.25 14.25h6M14.25 17.25h6"
    />,
    <circle
      className="single-neutral-actions-chat_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-actions-chat_svg__cls-1"
      d="M9.1 9.264A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.259-2.594"
    />
  );

export default SvgSingleNeutralActionsChat;
