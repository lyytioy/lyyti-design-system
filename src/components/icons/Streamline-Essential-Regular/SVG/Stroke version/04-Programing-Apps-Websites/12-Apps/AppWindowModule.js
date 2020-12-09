import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowModule = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-module_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-module_svg__a"
      d="M21.76 8.253v-6a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6M.76 5.253h21"
    />,
    <rect
      className="app-window-module_svg__a"
      x={18.76}
      y={18.753}
      width={4.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="app-window-module_svg__a"
      x={11.26}
      y={18.753}
      width={4.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="app-window-module_svg__a"
      x={15.76}
      y={11.253}
      width={4.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgAppWindowModule;
