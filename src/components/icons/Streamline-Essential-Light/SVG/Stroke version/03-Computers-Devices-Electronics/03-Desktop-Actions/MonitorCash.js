import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-cash_svg__a"
      d="M5.5 17.5h4M.5 11.5h11M8.5 14.5V16A1.5 1.5 0 017 17.5"
    />,
    <path
      className="monitor-cash_svg__a"
      d="M20.5 9.5v-8a1 1 0 00-1-1h-18a1 1 0 00-1 1v12a1 1 0 001 1h8M19 14.5h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H16M17.5 21.5v-1M17.5 14.5v-1"
    />,
    <circle className="monitor-cash_svg__a" cx={17.5} cy={17.5} r={6} />
  );

export default SvgMonitorCash;
