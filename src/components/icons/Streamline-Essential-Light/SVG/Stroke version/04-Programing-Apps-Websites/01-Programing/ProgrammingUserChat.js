import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingUserChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-user-chat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="programming-user-chat_svg__a"
      cx={5}
      cy={7.75}
      r={3.25}
    />,
    <path
      className="programming-user-chat_svg__a"
      d="M6.9 23.5l.6-3h2V17a4.5 4.5 0 00-9 0v3.5h2l.6 3M23.5 9.5a1 1 0 01-1 1H17l-3.5 3v-3h-1a1 1 0 01-1-1v-8a1 1 0 011-1h10a1 1 0 011 1z"
    />,
    <circle
      className="programming-user-chat_svg__a"
      cx={5}
      cy={7.75}
      r={3.25}
    />,
    <path
      className="programming-user-chat_svg__a"
      d="M6.9 23.5l.6-3h2V17a4.5 4.5 0 00-9 0v3.5h2l.6 3M14.5 3l2 2-2 2M17.5 6.5h4"
    />
  );

export default SvgProgrammingUserChat;
