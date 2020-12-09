import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordDesktop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-desktop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="password-desktop_svg__a"
      x={4.5}
      y={5.5}
      width={15}
      height={6}
      rx={1}
      ry={1}
    />,
    <path
      className="password-desktop_svg__a"
      d="M9.138 23.5a7.486 7.486 0 001.362-4M14.862 23.5a7.486 7.486 0 01-1.362-4M7.5 23.5h9M.5 16.5h23"
    />,
    <rect
      className="password-desktop_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={19}
      rx={1}
      ry={1}
    />,
    <path
      className="password-desktop_svg__a"
      d="M8 8.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M12 8.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M16 8.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgPasswordDesktop;
