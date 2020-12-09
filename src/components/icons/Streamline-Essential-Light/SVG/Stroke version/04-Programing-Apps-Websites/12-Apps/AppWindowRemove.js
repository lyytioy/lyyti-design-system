import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="app-window-remove_svg__a"
      cx={17.516}
      cy={17.505}
      r={6}
    />,
    <path
      className="app-window-remove_svg__a"
      d="M19.637 15.383l-4.242 4.243M19.637 19.626l-4.242-4.243M.516 4.504h20M3.516 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M5.516 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.516 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-remove_svg__a"
      d="M8.516 16.5h-6a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v6"
    />
  );

export default SvgAppWindowRemove;
