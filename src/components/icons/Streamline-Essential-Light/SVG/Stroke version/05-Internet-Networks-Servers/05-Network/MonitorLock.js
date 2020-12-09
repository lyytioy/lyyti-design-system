import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-lock_svg__a"
      d="M13.431 14.5a7.233 7.233 0 001.191 3.614l.24.386M9.138 18.5l.24-.386a7.233 7.233 0 001.191-3.614M7.5 18.5h9M21 .5a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1v-12a1 1 0 011-1zM12 20.5v3M4 23.5h16"
    />,
    <path
      className="monitor-lock_svg__a"
      d="M10 11.5h4a1 1 0 001-1v-3a1 1 0 00-1-1h-4a1 1 0 00-1 1v3a1 1 0 001 1zM12 3.5a2 2 0 00-2 2v1h4v-1a2 2 0 00-2-2z"
    />,
    <path
      className="monitor-lock_svg__a"
      d="M12 8.77a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgMonitorLock;
