import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-remove_svg__a"
      d="M5.5 17.5h4M.5 11.5h11M8.5 14.5V16A1.5 1.5 0 017 17.5"
    />,
    <path
      className="monitor-remove_svg__a"
      d="M20.5 9.5v-8a1 1 0 00-1-1h-18a1 1 0 00-1 1v12a1 1 0 001 1h8"
    />,
    <path
      className="monitor-remove_svg__a"
      d="M21.742 21.743a6 6 0 110-8.485 6 6 0 010 8.485zM19.621 15.379l-4.242 4.242M19.621 19.621l-4.242-4.242"
    />
  );

export default SvgMonitorRemove;
