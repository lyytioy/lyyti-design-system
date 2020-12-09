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
      d="M22.5 20.513h-4.25l-3.344 2.675a.25.25 0 01-.406-.2v-2.48h-2a1 1 0 01-1-1v-7a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1.005zM14.5 14.513h6M14.5 17.513h4M2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-actions-chat_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-man-actions-chat_svg__cls-1"
      d="M10.013 11.845A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1.482"
    />
  );

export default SvgSingleManActionsChat;
