import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorFind = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-find_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-find_svg__a"
      d="M5.5 17.5h5M.5 11.5h12M8.5 14.5V16A1.5 1.5 0 017 17.5"
    />,
    <path
      className="monitor-find_svg__a"
      d="M20.5 11.5v-10a1 1 0 00-1-1h-18a1 1 0 00-1 1v12a1 1 0 001 1h9"
    />,
    <circle
      className="monitor-find_svg__a"
      cx={17.029}
      cy={17.029}
      r={4.529}
    />,
    <path className="monitor-find_svg__a" d="M23.5 23.5l-3.268-3.268" />
  );

export default SvgMonitorFind;
