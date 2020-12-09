import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordLock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-lock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="password-lock-1_svg__a"
      d="M12.75 12.75H2.25a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 011.5 1.5v6"
    />,
    <path
      className="password-lock-1_svg__a"
      d="M5.25 6.375a.375.375 0 11-.375.375.374.374 0 01.375-.375M11.25 6.375a.375.375 0 11-.375.375.374.374 0 01.375-.375M17.25 6.375a.375.375 0 11-.375.375.374.374 0 01.375-.375"
    />,
    <rect
      className="password-lock-1_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="password-lock-1_svg__a"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.154a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgPasswordLock1;
