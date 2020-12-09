import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindow1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-1_svg__a"
      x={2.5}
      y={4.504}
      width={19}
      height={15}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-1_svg__a"
      d="M2.5 8.504h19M5.5 6.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.5 6.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M9.5 6.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgAppWindow1;
