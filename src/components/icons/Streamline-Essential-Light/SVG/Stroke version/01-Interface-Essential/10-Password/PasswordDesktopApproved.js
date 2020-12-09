import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordDesktopApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-desktop-approved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="password-desktop-approved_svg__a"
      d="M9.138 23.5a7.486 7.486 0 001.362-4M14.862 23.5a7.486 7.486 0 01-1.362-4M7.5 23.5h9M.5 16.5h23"
    />,
    <rect
      className="password-desktop-approved_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={19}
      rx={1}
      ry={1}
    />,
    <path
      className="password-desktop-approved_svg__a"
      d="M17 5.5l-5 5-2-2M16.5 9A4.5 4.5 0 1114 4.968"
    />
  );

export default SvgPasswordDesktopApproved;
