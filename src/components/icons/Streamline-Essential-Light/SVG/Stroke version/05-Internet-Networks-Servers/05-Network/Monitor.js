import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor_svg__a"
      d="M13.431 14.5a7.233 7.233 0 001.191 3.614l.24.386M9.138 18.5l.24-.386a7.233 7.233 0 001.191-3.614M7.5 18.5h9M2 11.5h20"
    />,
    <path
      className="monitor_svg__a"
      d="M21 .5a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1v-12a1 1 0 011-1zM12 20.5v3M4 23.5h16"
    />
  );

export default SvgMonitor;
