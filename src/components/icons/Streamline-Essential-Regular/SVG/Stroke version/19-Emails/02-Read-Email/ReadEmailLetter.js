import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailLetter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-letter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="read-email-letter_svg__a"
      x={2.25}
      y={11.25}
      width={19.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="read-email-letter_svg__a"
      d="M18.75 11.25v-9a1.5 1.5 0 00-1.5-1.5H6.75a1.5 1.5 0 00-1.5 1.5v9M8.25 3.75h4.5M8.25 6.75h7.5M15.75 14.25h3v3h-3zM5.25 14.25h3M5.25 20.25h6"
    />
  );

export default SvgReadEmailLetter;
