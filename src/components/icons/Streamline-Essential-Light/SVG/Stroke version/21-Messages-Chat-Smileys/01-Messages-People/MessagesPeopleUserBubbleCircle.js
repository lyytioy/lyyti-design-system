import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesPeopleUserBubbleCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-people-user-bubble-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-people-user-bubble-circle_svg__a"
      d="M23.5 6.5c0-3.313-3.358-6-7.5-6s-7.5 2.687-7.5 6c0 3.179 3.092 5.773 7 5.981V16l4.365-4.365A5.88 5.88 0 0023.5 6.5zM12.501 4.5h7M12.501 7.5h5"
    />,
    <circle
      className="messages-people-user-bubble-circle_svg__a"
      cx={3.5}
      cy={10.25}
      r={2.25}
    />,
    <path
      className="messages-people-user-bubble-circle_svg__a"
      d="M3.5 13.5a3 3 0 00-3 3v2H2l.5 5h2l.5-5h1.5v-2a3 3 0 00-3-3z"
    />
  );

export default SvgMessagesPeopleUserBubbleCircle;
