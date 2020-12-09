import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingUserChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-user-chat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="programming-user-chat_svg__a"
      d="M11.25 14.25h3v4.5l4.5-4.5h3a1.5 1.5 0 001.5-1.5V2.25a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5"
    />,
    <circle
      className="programming-user-chat_svg__a"
      cx={4.5}
      cy={6.75}
      r={3}
    />,
    <path
      className="programming-user-chat_svg__a"
      d="M8.25 17.25V15a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 6h3l.75-6zM12 5.25l2.25 2.25L12 9.75M17.25 7.5h3"
    />
  );

export default SvgProgrammingUserChat;
