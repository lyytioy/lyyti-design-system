import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchiveDrawer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".archive-drawer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="archive-drawer_svg__a"
      d="M17.5 14.5a1 1 0 00-1 1 1 1 0 01-1 1h-7a1 1 0 01-1-1 1 1 0 00-1-1h-5a1 1 0 00-1 1v6a1 1 0 001 1h21a1 1 0 001-1v-6a1 1 0 00-1-1zM7.5 13V2.5a1 1 0 011-1h11a1 1 0 011 1v12M3.5 14.5v-10a1 1 0 011-1h1M12.496 5.5H17.5M10.5 8.5h7M10.5 11.5h7"
    />
  );

export default SvgArchiveDrawer;
