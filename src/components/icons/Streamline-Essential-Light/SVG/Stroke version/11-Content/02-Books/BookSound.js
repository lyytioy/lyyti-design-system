import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookSound = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-sound_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-sound_svg__a"
      d="M21.5.5h-17a2 2 0 000 4h16a1 1 0 011 1v17a1 1 0 01-1 1h-16a2 2 0 01-2-2v-19M4.5 2.5h16M16 10.628a3.5 3.5 0 010 5.744"
    />,
    <path
      className="book-sound_svg__a"
      d="M13 9a4.488 4.488 0 00-4.043 2.558A1.914 1.914 0 008.5 11.5a2 2 0 000 4 1.914 1.914 0 00.457-.058A4.488 4.488 0 0013 18z"
    />
  );

export default SvgBookSound;
