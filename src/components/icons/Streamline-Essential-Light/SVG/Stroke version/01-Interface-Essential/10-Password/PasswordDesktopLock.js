import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordDesktopLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-desktop-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="password-desktop-lock_svg__a"
      d="M9.138 23.5a7.486 7.486 0 001.362-4M14.862 23.5a7.486 7.486 0 01-1.362-4M7.5 23.5h9M.5 16.5h23"
    />,
    <path
      className="password-desktop-lock_svg__a"
      d="M14.5.5h-13a1 1 0 00-1 1v17a1 1 0 001 1h21a1 1 0 001-1v-5"
    />,
    <path
      className="password-desktop-lock_svg__a"
      d="M12.5 11.5h-7a1 1 0 01-1-1v-4a1 1 0 011-1h7"
    />,
    <rect
      className="password-desktop-lock_svg__a"
      x={14.5}
      y={4.5}
      width={9}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="password-desktop-lock_svg__a"
      d="M19 7a1 1 0 101 1 1 1 0 00-1-1zM16.5 4.5V3a2.5 2.5 0 015 0v1.5M8 8.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M12 8.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgPasswordDesktopLock;
