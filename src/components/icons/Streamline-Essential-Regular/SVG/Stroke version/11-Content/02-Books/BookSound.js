import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookSound = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-sound_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-sound_svg__a"
      d="M15.75 21.75H3A2.25 2.25 0 01.75 19.5M3.75 2.25a3 3 0 00-3 3V19.5A2.25 2.25 0 013 17.25h12a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75zM14.25 21.75v-4.5"
    />,
    <path
      className="book-sound_svg__a"
      d="M7.5 7.5H6A2.25 2.25 0 006 12h1.5l3.75 2.25v-9zM21.273 6a6.75 6.75 0 010 9.546M19.152 8.121a3.752 3.752 0 010 5.3"
    />
  );

export default SvgBookSound;
