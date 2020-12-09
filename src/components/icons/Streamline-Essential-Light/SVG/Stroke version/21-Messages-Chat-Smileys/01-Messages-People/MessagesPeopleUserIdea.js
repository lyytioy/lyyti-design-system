import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesPeopleUserIdea = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-people-user-idea_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-people-user-idea_svg__a"
      d="M8.5 11.5a1 1 0 001 1h2V16l3.5-3.5h7.5a1 1 0 001-1v-10a1 1 0 00-1-1h-13a1 1 0 00-1 1z"
    />,
    <circle
      className="messages-people-user-idea_svg__a"
      cx={3.5}
      cy={10.25}
      r={2.25}
    />,
    <path
      className="messages-people-user-idea_svg__a"
      d="M3.5 13.5a3 3 0 00-3 3v2H2l.5 5h2l.5-5h1.5v-2a3 3 0 00-3-3zM16.5 7.5a2.491 2.491 0 01-1-.211V9.5h2V7.289a2.488 2.488 0 01-1 .211z"
    />,
    <circle
      className="messages-people-user-idea_svg__a"
      cx={16.5}
      cy={5}
      r={2.5}
    />,
    <path className="messages-people-user-idea_svg__a" d="M16.5 9.5v1" />
  );

export default SvgMessagesPeopleUserIdea;
