import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldUnlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-unlock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shield-unlock_svg__a"
      d="M2.25 3.923v7.614A11.907 11.907 0 009.882 22.65l1.041.4a3 3 0 002.154 0l1.041-.4a11.907 11.907 0 007.632-11.113V3.923a1.487 1.487 0 00-.868-1.362A21.7 21.7 0 0012 .75a21.7 21.7 0 00-8.882 1.811 1.487 1.487 0 00-.868 1.362z"
    />,
    <rect
      className="shield-unlock_svg__a"
      x={7.5}
      y={9.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="shield-unlock_svg__a"
      d="M15 9.75v-3a3 3 0 00-3-3 3 3 0 00-3 3M12 13.154a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgShieldUnlock;
