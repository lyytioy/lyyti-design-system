import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-chat_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-chat_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-neutral-actions-chat_svg__cls-1"
      d="M9 10.43A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1M22.5 20.513h-4.25l-3.344 2.675a.25.25 0 01-.406-.2v-2.48h-2a1 1 0 01-1-1v-7a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1.005zM14.5 14.513h6M14.5 17.513h4"
    />
  );

export default SvgSingleNeutralActionsChat;
