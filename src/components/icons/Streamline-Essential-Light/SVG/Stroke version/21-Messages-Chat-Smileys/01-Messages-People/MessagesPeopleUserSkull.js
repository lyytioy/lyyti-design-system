import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesPeopleUserSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-people-user-skull_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-people-user-skull_svg__a"
      d="M8.5 11.5a1 1 0 001 1h2V16l3.5-3.5h7.5a1 1 0 001-1v-10a1 1 0 00-1-1h-13a1 1 0 00-1 1z"
    />,
    <circle
      className="messages-people-user-skull_svg__a"
      cx={3.5}
      cy={10.25}
      r={2.25}
    />,
    <path
      className="messages-people-user-skull_svg__a"
      d="M3.5 13.5a3 3 0 00-3 3v2H2l.5 5h2l.5-5h1.5v-2a3 3 0 00-3-3zM16 10v.5M13.5 10.5v-.876a4 4 0 115 0v.876"
    />,
    <path
      className="messages-people-user-skull_svg__a"
      d="M14.5 5.5a.5.5 0 11-.5.5.5.5 0 01.5-.5M17.5 5.5a.5.5 0 11-.5.5.5.5 0 01.5-.5"
    />
  );

export default SvgMessagesPeopleUserSkull;
