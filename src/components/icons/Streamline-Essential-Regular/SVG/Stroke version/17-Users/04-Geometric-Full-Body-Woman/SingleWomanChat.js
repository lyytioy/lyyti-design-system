import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-chat_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="single-woman-chat_svg__cls-1" cx={6} cy={3.75} r={3} />,
    <path
      className="single-woman-chat_svg__cls-1"
      d="M8.25 23.25l.75-7.5h2.25V13.5a5.246 5.246 0 00-2.364-4.386L6 13.5 3.114 9.114A5.246 5.246 0 00.75 13.5v2.25H3l.75 7.5zM3 3.75S3 7.5.75 7.5M9 3.75S9 7.5 11.25 7.5M14.25 6.75h2.25v3l3.75-3h2.25a.75.75 0 00.75-.75V1.5a.75.75 0 00-.75-.75h-8.25a.75.75 0 00-.75.75V6a.75.75 0 00.75.75z"
    />
  );

export default SvgSingleWomanChat;
