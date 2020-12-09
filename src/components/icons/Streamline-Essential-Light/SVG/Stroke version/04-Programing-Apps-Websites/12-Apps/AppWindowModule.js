import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowModule = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-module_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-module_svg__a"
      x={19.547}
      y={19.504}
      width={4}
      height={4}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="app-window-module_svg__a"
      x={13.547}
      y={19.504}
      width={4}
      height={4}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="app-window-module_svg__a"
      x={16.547}
      y={13.504}
      width={4}
      height={4}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="app-window-module_svg__a"
      d="M.547 4.504h20M3.547 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M5.547 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.547 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-module_svg__a"
      d="M13.547 16.5h-11a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v9"
    />
  );

export default SvgAppWindowModule;
