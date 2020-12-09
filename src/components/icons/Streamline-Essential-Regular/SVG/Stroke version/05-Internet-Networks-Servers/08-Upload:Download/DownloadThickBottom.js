import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadThickBottom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-thick-bottom_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="download-thick-bottom_svg__a"
      d="M5.251 9.25L12 16l6.75-6.75H15V2.5a.75.75 0 00-.75-.75h-4.5A.75.75 0 009 2.5v6.75zM23.251 17.5v3a1.5 1.5 0 01-1.5 1.5h-19.5a1.5 1.5 0 01-1.5-1.5v-3"
    />
  );

export default SvgDownloadThickBottom;
