import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorFind = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-find_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-find_svg__a"
      d="M6 20.25h2.25M.75 12.789l7.5-.039M6.75 15.75h-3a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3v7.5"
    />,
    <circle className="monitor-find_svg__a" cx={15.75} cy={15.75} r={5.25} />,
    <path className="monitor-find_svg__a" d="M23.25 23.25l-3.788-3.788" />
  );

export default SvgMonitorFind;
