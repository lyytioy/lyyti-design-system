import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneChatting = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-chatting_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-chatting_svg__a"
      d="M4.5 3.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M6.5 3.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M8.5 3.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M10.5 3.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5 12.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 12.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.5 12.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M18.5 15.5v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-13M13.5 3.5h3a2 2 0 012 2v4M18.5 19.5h-11"
    />,
    <path
      className="phone-chatting_svg__a"
      d="M13 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M3.5.5a2 2 0 00-2 2v3a2 2 0 002 2h3l3 3v-3h2a2 2 0 002-2v-3a2 2 0 00-2-2zM22.5 11.5v2a2 2 0 01-2 2h-2l-3 2v-2h-1a2 2 0 01-2-2v-2a2 2 0 012-2h6a2 2 0 012 2z"
    />
  );

export default SvgPhoneChatting;
