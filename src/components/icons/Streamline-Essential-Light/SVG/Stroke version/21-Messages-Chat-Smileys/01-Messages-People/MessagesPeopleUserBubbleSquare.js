import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesPeopleUserBubbleSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-people-user-bubble-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-people-user-bubble-square_svg__a"
      d="M8.5 9.5a1 1 0 001 1h2V14l3.5-3.5h7.5a1 1 0 001-1v-8a1 1 0 00-1-1h-13a1 1 0 00-1 1zM11.501 6.499h7M11.501 3.518h9"
    />,
    <circle
      className="messages-people-user-bubble-square_svg__a"
      cx={3.5}
      cy={10.25}
      r={2.25}
    />,
    <path
      className="messages-people-user-bubble-square_svg__a"
      d="M3.5 13.5a3 3 0 00-3 3v2H2l.5 5h2l.5-5h1.5v-2a3 3 0 00-3-3z"
    />
  );

export default SvgMessagesPeopleUserBubbleSquare;
