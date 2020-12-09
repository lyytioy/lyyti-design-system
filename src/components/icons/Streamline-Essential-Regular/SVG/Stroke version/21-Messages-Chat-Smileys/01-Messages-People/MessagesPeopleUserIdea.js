import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesPeopleUserIdea = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-people-user-idea_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="messages-people-user-idea_svg__a"
      cx={4.5}
      cy={6.75}
      r={3}
    />,
    <path
      className="messages-people-user-idea_svg__a"
      d="M8.25 17.25V15a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 6h3l.75-6zM18.75 6.75a3 3 0 10-4.5 2.584v1.916h3V9.334a2.988 2.988 0 001.5-2.584zM15.75 11.25v1.5"
    />,
    <path
      className="messages-people-user-idea_svg__a"
      d="M11.25 15.75h3v4.5l4.5-4.5h3a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5"
    />
  );

export default SvgMessagesPeopleUserIdea;
