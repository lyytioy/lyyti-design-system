import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingBar1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-bar-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="loading-bar-1_svg__a"
      d="M23.5 19.5a2 2 0 01-2 2h-19a2 2 0 01-2-2v-14a2 2 0 012-2h19a2 2 0 012 2zM.5 8.498h23"
    />,
    <path
      className="loading-bar-1_svg__a"
      d="M3.5 15A2.5 2.5 0 016 12.5h12a2.5 2.5 0 010 5H6A2.5 2.5 0 013.5 15zM5.541 17.455l4.957-4.957M9.998 17.498l5-5M4.498 3.498v5M8.498 3.498v5"
    />
  );

export default SvgLoadingBar1;
