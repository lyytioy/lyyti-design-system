import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-remove_svg__a"
      d="M8.25 20.25l.75-4.5M6 20.25h2.25M.75 12.75h9.031M9 15.75H3.75a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3v7.5"
    />,
    <circle className="monitor-remove_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="monitor-remove_svg__a"
      d="M19.5 15L15 19.5M15 15l4.5 4.5"
    />
  );

export default SvgMonitorRemove;
