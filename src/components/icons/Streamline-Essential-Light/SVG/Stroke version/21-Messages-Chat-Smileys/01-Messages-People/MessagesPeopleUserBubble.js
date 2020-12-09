import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesPeopleUserBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-people-user-bubble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-people-user-bubble_svg__a"
      d="M18.61.5a4.752 4.752 0 00-4.233 2.658 3.655 3.655 0 00-2.151-.7A3.766 3.766 0 008.5 6.261a3.764 3.764 0 003.725 3.8c.045 0 .088 0 .134-.005a3.674 3.674 0 005.43.767 4.915 4.915 0 001.036.109c2.822 0 4.675-2.336 4.675-5.218A4.986 4.986 0 0018.61.5z"
    />,
    <circle
      className="messages-people-user-bubble_svg__a"
      cx={3.5}
      cy={10.25}
      r={2.25}
    />,
    <path
      className="messages-people-user-bubble_svg__a"
      d="M3.5 13.5a3 3 0 00-3 3v2H2l.5 5h2l.5-5h1.5v-2a3 3 0 00-3-3zM8.75 15a.25.25 0 11-.25.25.25.25 0 01.25-.25M16 6.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.25 6.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M12.75 6.5a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <circle
      className="messages-people-user-bubble_svg__a"
      cx={11}
      cy={13.002}
      r={1}
    />
  );

export default SvgMessagesPeopleUserBubble;
