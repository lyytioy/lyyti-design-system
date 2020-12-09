import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-refresh_svg__a"
      d="M.518 4.504h20M3.518 2.254a.25.25 0 10.25.25.249.249 0 00-.25-.25M5.518 2.254a.25.25 0 10.25.25.249.249 0 00-.25-.25M7.518 2.254a.25.25 0 10.25.25.249.249 0 00-.25-.25"
    />,
    <path
      className="app-window-refresh_svg__a"
      d="M9.518 16.5h-7a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2V10M19.018 15.505h4.5v-4.5M23.177 15.505a6 6 0 10-.969 5.742"
    />
  );

export default SvgAppWindowRefresh;
