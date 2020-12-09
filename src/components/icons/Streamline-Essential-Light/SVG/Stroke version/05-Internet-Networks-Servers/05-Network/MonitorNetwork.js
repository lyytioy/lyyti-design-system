import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorNetwork = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-network_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-network_svg__a"
      d="M11 19.5a1 1 0 01-1 1H2a1 1 0 01-1-1v-5a1 1 0 011-1h8a1 1 0 011 1zM6 20.5v3M3 23.5h6M23 19.5a1 1 0 01-1 1h-8a1 1 0 01-1-1v-5a1 1 0 011-1h8a1 1 0 011 1zM18 20.5v3M15 23.5h6M18 7.5a1 1 0 01-1 1H7a1 1 0 01-1-1v-6a1 1 0 011-1h10a1 1 0 011 1zM12 8.5v3M9 11.5h6"
    />
  );

export default SvgMonitorNetwork;
