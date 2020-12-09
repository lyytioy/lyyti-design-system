import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowSmall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-small_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-small_svg__a"
      x={5}
      y={6.504}
      width={14}
      height={10}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-small_svg__a"
      d="M5 10.504h14M8 8.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M10 8.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M12 8.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgAppWindowSmall;
