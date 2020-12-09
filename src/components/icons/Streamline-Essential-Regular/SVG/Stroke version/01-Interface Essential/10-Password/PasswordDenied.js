import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordDenied = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-denied_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="password-denied_svg__a"
      d="M9 12.75H2.25a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 011.5 1.5v6"
    />,
    <circle className="password-denied_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="password-denied_svg__a"
      d="M19.5 14.999l-4.5 4.5M15 14.999l4.5 4.5M5.25 6.375a.375.375 0 11-.375.375.374.374 0 01.375-.375M11.25 6.375a.375.375 0 11-.375.375.374.374 0 01.375-.375M17.25 6.375a.375.375 0 11-.375.375.374.374 0 01.375-.375"
    />
  );

export default SvgPasswordDenied;
