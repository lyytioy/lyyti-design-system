import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingTeamChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-team-chat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="programming-team-chat_svg__a"
      cx={5.25}
      cy={14.25}
      r={3}
    />,
    <path
      className="programming-team-chat_svg__a"
      d="M.75 23.25a4.5 4.5 0 019 0zM21.349 12.75a3 3 0 11-5.6 1.5M14.25 23.25a4.5 4.5 0 019 0zM6.75 9.75H12v4.5l4.5-4.5h6v-9H6.75v9z"
    />,
    <path
      className="programming-team-chat_svg__a"
      d="M17.596 3L19.5 5.25 17.596 7.5M11.654 3L9.75 5.25l1.904 2.25M15 3l-.75 4.5"
    />
  );

export default SvgProgrammingTeamChat;
