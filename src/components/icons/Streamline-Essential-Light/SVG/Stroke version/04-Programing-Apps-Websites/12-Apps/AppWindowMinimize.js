import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowMinimize = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-minimize_svg__a,.app-window-minimize_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}.app-window-minimize_svg__b{fill-rule:evenodd}"
        }
      </style>
    </defs>,
    <path
      className="app-window-minimize_svg__a"
      d="M4 2.754A.25.25 0 113.75 3 .25.25 0 014 2.754M.5 5.504h23"
    />,
    <path
      className="app-window-minimize_svg__b"
      d="M7 2.754A.25.25 0 116.75 3 .25.25 0 017 2.754M10 2.754A.25.25 0 119.75 3a.25.25 0 01.25-.25"
    />,
    <path
      className="app-window-minimize_svg__a"
      d="M7.5 20.5h-5a2 2 0 01-2-2v-16a2 2 0 012-2h19a2 2 0 012 2V18M15.5 17.504L6 8.004"
    />,
    <path className="app-window-minimize_svg__a" d="M15.5 13.004v4.5H11" />,
    <rect
      className="app-window-minimize_svg__a"
      x={15.5}
      y={20.504}
      width={8}
      height={3}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgAppWindowMinimize;
