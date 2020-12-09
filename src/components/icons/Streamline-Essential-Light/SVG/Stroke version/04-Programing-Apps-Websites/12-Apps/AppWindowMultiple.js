import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowMultiple = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-multiple_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-multiple_svg__a"
      d="M.5 7.004h19M3.5 4.754A.25.25 0 103.75 5a.25.25 0 00-.25-.25M5.5 4.754A.25.25 0 105.75 5a.25.25 0 00-.25-.25M7.5 4.754A.25.25 0 107.75 5a.25.25 0 00-.25-.25"
    />,
    <rect
      className="app-window-multiple_svg__a"
      x={0.5}
      y={3.004}
      width={19}
      height={14}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-multiple_svg__a"
      d="M19.5 5a2 2 0 012 2v10a2 2 0 01-2 2h-15a2 2 0 01-2-2"
    />,
    <path
      className="app-window-multiple_svg__a"
      d="M21.5 7a2 2 0 012 2v10a2 2 0 01-2 2h-15a2 2 0 01-2-2"
    />
  );

export default SvgAppWindowMultiple;
