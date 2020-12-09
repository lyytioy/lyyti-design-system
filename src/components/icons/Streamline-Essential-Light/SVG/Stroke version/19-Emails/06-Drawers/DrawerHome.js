import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="drawer-home_svg__a"
      d="M9 6.632V10.5a1 1 0 001 1h4a1 1 0 001-1V6.632"
    />,
    <path
      className="drawer-home_svg__a"
      d="M8 7.507l3.012-2.636a1.5 1.5 0 011.976 0L16 7.507M13 11.5h-2v-2a1 1 0 012 0z"
    />,
    <path
      className="drawer-home_svg__a"
      d="M19.5 14.5v-13a1 1 0 00-1-1h-13a1 1 0 00-1 1v13M23.5 22.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-6h7v1a2.006 2.006 0 002 2h5a2.006 2.006 0 002-2v-1h7zM.5 16.5l4-6M19.5 10.5l4 6"
    />
  );

export default SvgDrawerHome;
