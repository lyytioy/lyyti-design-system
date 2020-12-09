import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordDesktopApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-desktop-approved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="password-desktop-approved_svg__a"
      d="M13.5 18.75a8.934 8.934 0 001.5 4.5H9a8.934 8.934 0 001.5-4.5M6.75 23.25h10.5M.75 14.25h22.5"
    />,
    <rect
      className="password-desktop-approved_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={18}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="password-desktop-approved_svg__a"
      d="M17.956 4.516L12 11.25 8.25 7.516"
    />
  );

export default SvgPasswordDesktopApproved;
