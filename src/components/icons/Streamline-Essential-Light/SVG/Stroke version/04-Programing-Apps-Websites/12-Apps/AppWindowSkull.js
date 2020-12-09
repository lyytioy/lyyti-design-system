import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-skull_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-skull_svg__a"
      x={0.5}
      y={3.004}
      width={23}
      height={18}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-skull_svg__a"
      d="M.5 8.004h23M4 5.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 5.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 5.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M12 17.504v1.5M9.5 19v-1.876a4 4 0 115 0V19"
    />,
    <path
      className="app-window-skull_svg__a"
      d="M10.5 13.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.5 13.254a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgAppWindowSkull;
