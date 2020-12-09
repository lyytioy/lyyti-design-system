import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderHold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-hold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-hold_svg__a"
      d="M20.25 8.25v-3a1.5 1.5 0 00-1.5-1.5H8.25v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v14.8a1.7 1.7 0 003.336.438l2.351-8.154A1.5 1.5 0 017.879 8.25H21.75a1.5 1.5 0 011.45 1.886l-2.2 7.5a1.5 1.5 0 01-1.45 1.114H2.447M11.25 18.75v4.5M5.25 23.25h12M.75 23.25h1.5M20.25 23.25h1.5"
    />
  );

export default SvgFolderHold;
