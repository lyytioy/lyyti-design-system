import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordCursor1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-cursor-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="password-cursor-1_svg__a"
      d="M9 12.75H2.25a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5"
    />,
    <path
      className="password-cursor-1_svg__a"
      d="M13.1 13.461l2.9 9.262a.751.751 0 001.218.334l1.532-4.307 4.252-.9a.75.75 0 00-.185-1.237l-8.683-4.053a.75.75 0 00-1.034.901zM5.25 6.375a.375.375 0 11-.375.375.374.374 0 01.375-.375M11.25 6.375a.375.375 0 11-.375.375.374.374 0 01.375-.375M17.25 6.375a.375.375 0 11-.375.375.374.374 0 01.375-.375"
    />
  );

export default SvgPasswordCursor1;
