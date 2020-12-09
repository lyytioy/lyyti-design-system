import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-chat_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-chat_svg__cls-1"
      d="M6.5 8.5a1 1 0 001 1h1l2.573 2.573a.25.25 0 00.427-.173V9.5h7a1 1 0 001-1v-7a1 1 0 00-1-1h-11a1 1 0 00-1 1zM9.5 3.5h6.969M9.5 6.5h6.969"
    />,
    <circle className="multiple-chat_svg__cls-1" cx={5} cy={13.75} r={2.25} />,
    <path
      className="multiple-chat_svg__cls-1"
      d="M8.169 18.27A4.633 4.633 0 00.5 20.5h6"
    />,
    <circle className="multiple-chat_svg__cls-1" cx={19} cy={13.75} r={2.25} />,
    <path
      className="multiple-chat_svg__cls-1"
      d="M15.831 18.27A4.633 4.633 0 0123.5 20.5h-6"
    />,
    <circle className="multiple-chat_svg__cls-1" cx={12} cy={16.75} r={2.25} />,
    <path
      className="multiple-chat_svg__cls-1"
      d="M16.5 23.5a4.644 4.644 0 00-9 0z"
    />
  );

export default SvgMultipleChat;
