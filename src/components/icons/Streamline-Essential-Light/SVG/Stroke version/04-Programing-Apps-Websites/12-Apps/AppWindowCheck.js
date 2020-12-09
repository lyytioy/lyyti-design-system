import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-check_svg__a"
      d="M.5 4.504h20M3.5 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M5.5 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.5 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-check_svg__a"
      d="M8.5 16.5h-6a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v6"
    />,
    <circle
      className="app-window-check_svg__a"
      cx={17.501}
      cy={17.505}
      r={6}
    />,
    <path
      className="app-window-check_svg__a"
      d="M20.175 15.76l-2.905 3.874a.75.75 0 01-1.13.08l-1.5-1.5"
    />
  );

export default SvgAppWindowCheck;
