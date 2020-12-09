import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingTeamChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-team-chat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="programming-team-chat_svg__a"
      d="M20.5 8.5a1 1 0 01-1 1h-4l-3 3v-3h-7a1 1 0 01-1-1v-7a1 1 0 011-1h14a1 1 0 011 1z"
    />,
    <circle
      className="programming-team-chat_svg__a"
      cx={4.88}
      cy={16.25}
      r={2.75}
    />,
    <path
      className="programming-team-chat_svg__a"
      d="M9.259 23.5a4.49 4.49 0 00-8.759 0"
    />,
    <circle
      className="programming-team-chat_svg__a"
      cx={19.12}
      cy={16.25}
      r={2.75}
    />,
    <path
      className="programming-team-chat_svg__a"
      d="M23.5 23.5a4.49 4.49 0 00-8.759 0M15 3l2 2-2 2M10 3L8 5l2 2M13.5 3l-2 4"
    />
  );

export default SvgProgrammingTeamChat;
