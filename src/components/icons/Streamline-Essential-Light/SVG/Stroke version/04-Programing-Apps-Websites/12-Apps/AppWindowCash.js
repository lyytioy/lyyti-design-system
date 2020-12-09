import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-cash_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-cash_svg__a"
      d="M.5 7.004h23M4 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.5 11.5h-1.7a1.3 1.3 0 00-.723 2.386l1.84 1.227A1.3 1.3 0 0112.2 17.5h-1.7M12.5 11.504v-1M11.5 18.504v-1"
    />
  );

export default SvgAppWindowCash;
