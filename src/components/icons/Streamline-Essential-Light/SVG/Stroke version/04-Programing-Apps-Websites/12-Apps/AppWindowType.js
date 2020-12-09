import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-type_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-type_svg__a"
      x={0.5}
      y={3.004}
      width={23}
      height={18}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-type_svg__a"
      d="M.5 8.004h23M4 5.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 5.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 5.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.5 12v-1.5A.5.5 0 018 10h7a.5.5 0 01.5.5V12M11.5 10.004v9"
    />
  );

export default SvgAppWindowType;
