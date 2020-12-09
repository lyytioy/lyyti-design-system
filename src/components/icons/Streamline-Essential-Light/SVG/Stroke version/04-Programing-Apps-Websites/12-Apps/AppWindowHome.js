import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-home_svg__a"
      d="M11.516 16.312v7.193h9v-7.193"
    />,
    <path
      className="app-window-home_svg__a"
      d="M9.516 18.005l6.5-5.5 6.5 5.5M17.516 23.505h-3v-3a1.5 1.5 0 013 0zM1.516 4.504h20M4.516 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M6.516 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.516 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-home_svg__a"
      d="M7.516 16.5h-4a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2V14"
    />
  );

export default SvgAppWindowHome;
