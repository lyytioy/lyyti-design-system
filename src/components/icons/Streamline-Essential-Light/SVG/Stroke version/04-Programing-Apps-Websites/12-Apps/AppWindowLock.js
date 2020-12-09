import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-lock_svg__a"
      d="M1.017 4.504h20M4.017 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M6.017 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.017 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-lock_svg__a"
      d="M10.017 16.5h-7a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v6"
    />,
    <rect
      className="app-window-lock_svg__a"
      x={14.018}
      y={15.505}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle
      className="app-window-lock_svg__a"
      cx={18.518}
      cy={19.568}
      r={1.25}
    />,
    <path
      className="app-window-lock_svg__a"
      d="M21.018 14.005a2.5 2.5 0 00-5 0v1.5h5z"
    />
  );

export default SvgAppWindowLock;
