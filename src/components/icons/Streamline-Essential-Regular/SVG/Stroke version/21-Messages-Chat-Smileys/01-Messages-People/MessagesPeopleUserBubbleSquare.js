import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesPeopleUserBubbleSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-people-user-bubble-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-people-user-bubble-square_svg__a"
      d="M11.25 9.75h3v4.5l4.5-4.5h4.5v-9h-12v9zM14.25 3.75h6M14.25 6.75h6"
    />,
    <circle
      className="messages-people-user-bubble-square_svg__a"
      cx={4.5}
      cy={6.75}
      r={3}
    />,
    <path
      className="messages-people-user-bubble-square_svg__a"
      d="M8.25 17.25V15a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 6h3l.75-6z"
    />
  );

export default SvgMessagesPeopleUserBubbleSquare;
