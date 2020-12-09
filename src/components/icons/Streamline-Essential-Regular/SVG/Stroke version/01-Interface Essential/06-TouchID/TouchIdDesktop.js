import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchIdDesktop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-desktop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-desktop_svg__a"
      d="M15.001 23.25h-6l.75-4.5h4.5l.75 4.5zM6.751 23.25h10.5"
    />,
    <rect
      className="touch-id-desktop_svg__a"
      x={0.751}
      y={0.75}
      width={22.5}
      height={18}
      rx={3}
      ry={3}
    />,
    <path
      className="touch-id-desktop_svg__a"
      d="M.751 15.75h22.5M16.5 12.75v-4.5A4.477 4.477 0 0015.9 6M7.501 8.25v4.5M13.472 4a4.507 4.507 0 00-5.2 1.738M10.5 9v-.75a1.5 1.5 0 013 0v4.5M10.501 12v.75"
    />
  );

export default SvgTouchIdDesktop;
