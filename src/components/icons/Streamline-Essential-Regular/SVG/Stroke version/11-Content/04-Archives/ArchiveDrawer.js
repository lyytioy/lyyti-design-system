import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchiveDrawer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".archive-drawer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="archive-drawer_svg__a"
      d="M22.5 15.75H15a3 3 0 01-6 0H1.5a.75.75 0 00-.75.75v3.75a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 00-.75-.75zM21.75 12.75v-9a1.5 1.5 0 00-1.5-1.5H10.5A1.5 1.5 0 009 3.75v9M2.25 12.75v-6a1.5 1.5 0 011.5-1.5H6M14.999 6.75h3.751M11.999 10.5h6.751"
    />
  );

export default SvgArchiveDrawer;
