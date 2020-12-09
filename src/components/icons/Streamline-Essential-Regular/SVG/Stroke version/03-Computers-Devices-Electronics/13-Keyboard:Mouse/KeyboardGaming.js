import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardGaming = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-gaming_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-gaming_svg__a"
      d="M23.25 18.75a3 3 0 01-3 3H18l-2.25 1.5h-7.5L6 21.75H3.75a3 3 0 01-3-3v-4.5a3 3 0 013-3H6l2.25-1.5h7.5l2.25 1.5h2.25a3 3 0 013 3zM6.75 14.25h1.5M15.75 14.25h1.5M11.25 14.25h1.5M4.5 17.25H6M9 17.25h1.5M13.5 17.25H15M18 17.25h1.5M9 20.25h6"
    />,
    <path
      className="keyboard-gaming_svg__a"
      d="M5.25 11.25v-1.5a4.5 4.5 0 014.5-4.5h3.75A4.5 4.5 0 0018 .75"
    />
  );

export default SvgKeyboardGaming;
