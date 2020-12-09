import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyFever = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-fever_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-fever_svg__a"
      d="M21.721 17.666A11.25 11.25 0 1121.6 6.127M7.768 9.143a.375.375 0 01.375.375M8.143 9.518a.375.375 0 11-.375-.375"
    />,
    <path
      className="smiley-fever_svg__a"
      d="M16.5 9.143a.375.375 0 11-.375.375.375.375 0 01.375-.375M18.048 18a6.752 6.752 0 00-12.1 0M9.268 6.084a3.542 3.542 0 00-2.335.291A3.544 3.544 0 005.25 8.018M15 6.084a3.689 3.689 0 014.018 1.934"
    />,
    <path
      className="smiley-fever_svg__a"
      d="M17.673 17.342l5.138-5.142a1.5 1.5 0 000-2.121 1.5 1.5 0 00-2.122 0l-5.161 5.161M18.568 12.204l2.121 2.121"
    />
  );

export default SvgSmileyFever;
