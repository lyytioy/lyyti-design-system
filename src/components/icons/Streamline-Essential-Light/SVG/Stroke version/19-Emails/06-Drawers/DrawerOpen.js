import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerOpen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-open_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="drawer-open_svg__a"
      d="M23.5 17.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-6h7v1a2.006 2.006 0 002 2h5a2.006 2.006 0 002-2v-1h7zM.5 11.5L3.711 6a1 1 0 01.863-.5h14.852a1 1 0 01.863.5l3.211 5.5"
    />
  );

export default SvgDrawerOpen;
