import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingBar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-bar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="loading-bar_svg__a"
      d="M23.5 19.5a2 2 0 01-2 2h-19a2 2 0 01-2-2v-14a2 2 0 012-2h19a2 2 0 012 2zM.5 8.498h23M4.25 5.498"
    />,
    <path
      className="loading-bar_svg__a"
      d="M4.25 5.5a.25.25 0 10.25.25.249.249 0 00-.25-.25M7.25 5.5a.25.25 0 10.25.25.249.249 0 00-.25-.25M10.25 5.5a.25.25 0 10.25.25.249.249 0 00-.25-.25M3.5 15A2.5 2.5 0 016 12.5h12a2.5 2.5 0 010 5H6A2.5 2.5 0 013.5 15zM4.281 16.81l4.312-4.312M6.594 17.498l4.999-5M9.594 17.498l4.999-5"
    />
  );

export default SvgLoadingBar;
