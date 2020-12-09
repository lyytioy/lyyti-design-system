import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleBell = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-bell_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-bell_svg__a"
      d="M15.049 15A6.751 6.751 0 119 5.25M4.5 6.969V2.25A1.5 1.5 0 016 .75h4.5"
    />,
    <path
      className="smart-watch-circle-bell_svg__a"
      d="M13.5 17.03v4.72a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5v-4.72M16.5.75a3.75 3.75 0 013.75 3.75v3a1.5 1.5 0 001.5 1.5h-10.5a1.5 1.5 0 001.5-1.5v-3A3.75 3.75 0 0116.5.75zM16.5 11.25a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgSmartWatchCircleBell;
