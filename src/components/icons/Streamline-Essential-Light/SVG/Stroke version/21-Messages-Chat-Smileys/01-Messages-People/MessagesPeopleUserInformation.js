import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesPeopleUserInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-people-user-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-people-user-information_svg__a"
      d="M8.5 11.5a1 1 0 001 1h2V16l3.5-3.5h7.5a1 1 0 001-1v-10a1 1 0 00-1-1h-13a1 1 0 00-1 1z"
    />,
    <circle
      className="messages-people-user-information_svg__a"
      cx={3.5}
      cy={10.25}
      r={2.25}
    />,
    <path
      className="messages-people-user-information_svg__a"
      d="M3.5 13.5a3 3 0 00-3 3v2H2l.5 5h2l.5-5h1.5v-2a3 3 0 00-3-3zM16.5 10V6M16.25 3.75a.25.25 0 00.5 0M16.5 3.5a.25.25 0 00-.25.25M16.75 3.75a.25.25 0 00-.25-.25"
    />
  );

export default SvgMessagesPeopleUserInformation;
