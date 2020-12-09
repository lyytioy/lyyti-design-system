import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-music_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-music_svg__a"
      d="M.5 7.004h23M4 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <ellipse
      className="app-window-music_svg__a"
      cx={11}
      cy={17.316}
      rx={2.5}
      ry={1.687}
    />,
    <path
      className="app-window-music_svg__a"
      d="M13.5 17.316v-6.122a.5.5 0 01.82-.384l2.18 1.819"
    />
  );

export default SvgAppWindowMusic;
