import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordDesktop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-desktop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="password-desktop_svg__a"
      d="M7.875 7.875a.375.375 0 10.375.375.374.374 0 00-.375-.375M11.625 7.875A.375.375 0 1012 8.25a.374.374 0 00-.375-.375"
    />,
    <rect
      className="password-desktop_svg__a"
      x={3.75}
      y={5.25}
      width={16.5}
      height={6}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="password-desktop_svg__a"
      d="M15 8.25h1.5M13.5 18.75a8.934 8.934 0 001.5 4.5H9a8.934 8.934 0 001.5-4.5M6.75 23.25h10.5M.75 15.75h22.5"
    />,
    <rect
      className="password-desktop_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={18}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgPasswordDesktop;
