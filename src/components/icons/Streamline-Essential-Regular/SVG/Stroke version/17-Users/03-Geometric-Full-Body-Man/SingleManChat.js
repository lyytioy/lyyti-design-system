import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-chat_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="single-man-chat_svg__cls-1" cx={5.25} cy={3.75} r={3} />,
    <path
      className="single-man-chat_svg__cls-1"
      d="M5.25 8.25v6M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5zM12 6.75h2.25v4.5l4.5-4.5h3.75a.75.75 0 00.75-.75V1.5a.75.75 0 00-.75-.75H12a.75.75 0 00-.75.75V6a.75.75 0 00.75.75z"
    />
  );

export default SvgSingleManChat;
