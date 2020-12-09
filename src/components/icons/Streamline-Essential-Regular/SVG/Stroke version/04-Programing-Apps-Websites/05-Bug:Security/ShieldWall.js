import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldWall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-wall_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shield-wall_svg__a"
      d="M2.25 3.923v7.614A11.907 11.907 0 009.882 22.65l1.041.4a3 3 0 002.154 0l1.041-.4a11.907 11.907 0 007.632-11.113V3.923a1.487 1.487 0 00-.868-1.362A21.7 21.7 0 0012 .75a21.7 21.7 0 00-8.882 1.811 1.487 1.487 0 00-.868 1.362z"
    />,
    <rect
      className="shield-wall_svg__a"
      x={6.75}
      y={6.75}
      width={10.5}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="shield-wall_svg__a"
      d="M6.75 11.25h10.5M11.25 6.75v4.5M12.75 11.25v4.5"
    />
  );

export default SvgShieldWall;
