import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchIdDesktop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-desktop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-desktop_svg__a"
      d="M9.138 23.5a7.486 7.486 0 001.362-4M14.862 23.5a7.486 7.486 0 01-1.362-4M7.5 23.5h9M.5 16.5h23"
    />,
    <rect
      className="touch-id-desktop_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={19}
      rx={1}
      ry={1}
    />,
    <path
      className="touch-id-desktop_svg__a"
      d="M6 11.5v.667M15.317 4.5A6 6 0 006 9.5M18 10.667V9.5a5.972 5.972 0 00-1.01-3.333M18 14.5v-1.833"
    />,
    <path
      className="touch-id-desktop_svg__a"
      d="M16 11.667V9.5a4 4 0 00-8 0v5M16 14.5v-.833M10 13.167V14.5"
    />,
    <path
      className="touch-id-desktop_svg__a"
      d="M14 14.5v-5a2 2 0 00-4 0v1.667M12 9.834V14.5M6 14v.5"
    />
  );

export default SvgTouchIdDesktop;
