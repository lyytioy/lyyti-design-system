import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-file_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="drawer-file_svg__a"
      d="M19.5 14.5v-13a1 1 0 00-1-1h-13a1 1 0 00-1 1v13M23.5 22.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-6h7v1a2.006 2.006 0 002 2h5a2.006 2.006 0 002-2v-1h7zM.5 16.5l4-6M19.5 10.5l4 6M8.5 3.5h1.997M10.5 6.5h5M8.5 9.5h7M8.5 12.5h7"
    />
  );

export default SvgDrawerFile;
