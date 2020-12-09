import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-cash_svg__a"
      d="M8.25 20.25l.75-4.5M6 20.25h2.25M.75 12.75h9.133M9 15.75H3.75a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3v7.5M18.75 14.25h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H15.75M17.25 14.25v-.75M17.25 21v-.75"
    />,
    <circle className="monitor-cash_svg__a" cx={17.25} cy={17.25} r={6} />
  );

export default SvgMonitorCash;
