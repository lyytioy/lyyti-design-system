import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraHolder = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-holder_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-holder_svg__a"
      d="M17.25 11.25h-12v-9a1.5 1.5 0 011.5-1.5h10.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5zM5.25 11.25V21a2.25 2.25 0 004.5 0v-3.75a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 001.5-1.5v-3zM.75 3.75h4.5v4.5H.75zM20.25 4.5h-1.5V9h1.5l3 1.5V3l-3 1.5zM12 8.25h3.75"
    />,
    <path
      className="camera-holder_svg__a"
      d="M9 4.125a.375.375 0 11-.375.375A.375.375 0 019 4.125M.75 2.25v7.5"
    />
  );

export default SvgCameraHolder;
