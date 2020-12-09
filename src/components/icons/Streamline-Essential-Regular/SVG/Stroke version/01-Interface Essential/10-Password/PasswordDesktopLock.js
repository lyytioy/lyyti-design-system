import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordDesktopLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-desktop-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="password-desktop-lock_svg__a"
      d="M7.125 7.875a.375.375 0 10.375.375.374.374 0 00-.375-.375M10.875 7.875a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />,
    <path
      className="password-desktop-lock_svg__a"
      d="M11.25 11.25H4.5a.75.75 0 01-.75-.75V6a.75.75 0 01.75-.75h6.75M13.5 18.75a8.934 8.934 0 001.5 4.5H9a8.934 8.934 0 001.5-4.5M6.75 23.25h10.5M.75 15.75h22.5"
    />,
    <path
      className="password-desktop-lock_svg__a"
      d="M23.25 15.75v1.5a1.5 1.5 0 01-1.5 1.5H2.25a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h10.5"
    />,
    <rect
      className="password-desktop-lock_svg__a"
      x={14.25}
      y={5.25}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="password-desktop-lock_svg__a"
      d="M15.75 5.25v-1.5a3 3 0 013-3 3 3 0 013 3v1.5M18.75 8.625a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />
  );

export default SvgPasswordDesktopLock;
