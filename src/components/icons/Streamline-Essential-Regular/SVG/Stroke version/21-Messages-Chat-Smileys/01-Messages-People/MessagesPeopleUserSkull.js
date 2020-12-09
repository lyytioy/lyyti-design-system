import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesPeopleUserSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-people-user-skull_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-people-user-skull_svg__a"
      d="M11.25 15.75h3v4.5l4.5-4.5h3a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5"
    />,
    <circle
      className="messages-people-user-skull_svg__a"
      cx={4.5}
      cy={6.75}
      r={3}
    />,
    <path
      className="messages-people-user-skull_svg__a"
      d="M8.25 17.25V15a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 6h3l.75-6zM14.25 7.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 7.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M15.75 12.75v-1.5"
    />,
    <path
      className="messages-people-user-skull_svg__a"
      d="M20.25 8.25a4.5 4.5 0 00-9 0 3.566 3.566 0 001.5 2.582V12a.75.75 0 00.75.75H18a.75.75 0 00.75-.75v-1.168a4.235 4.235 0 001.5-2.582z"
    />
  );

export default SvgMessagesPeopleUserSkull;
