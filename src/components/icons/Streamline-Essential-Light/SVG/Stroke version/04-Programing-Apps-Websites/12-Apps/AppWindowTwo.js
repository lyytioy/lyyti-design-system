import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowTwo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-two_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-two_svg__a"
      d="M.5 6.504h20M3.5 4.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M5.5 4.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.5 4.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <rect
      className="app-window-two_svg__a"
      x={0.5}
      y={2.504}
      width={20}
      height={15}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-two_svg__a"
      d="M20.5 10.504h3M20.5 6.5h1a2 2 0 012 2v11a2 2 0 01-2 2h-16a2 2 0 01-2-2v-2"
    />
  );

export default SvgAppWindowTwo;
