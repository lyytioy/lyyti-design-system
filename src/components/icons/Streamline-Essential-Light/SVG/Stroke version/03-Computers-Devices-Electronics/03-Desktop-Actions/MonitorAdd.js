import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="monitor-add_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="monitor-add_svg__a"
      d="M17.5 14.5v6M20.5 17.5h-6M5.5 17.5h4M.5 11.5h11M8.5 14.5V16A1.5 1.5 0 017 17.5"
    />,
    <path
      className="monitor-add_svg__a"
      d="M20.5 9.5v-8a1 1 0 00-1-1h-18a1 1 0 00-1 1v12a1 1 0 001 1h8"
    />
  );

export default SvgMonitorAdd;
