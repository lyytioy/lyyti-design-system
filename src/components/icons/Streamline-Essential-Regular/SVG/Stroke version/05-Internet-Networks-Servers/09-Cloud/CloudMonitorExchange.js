import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudMonitorExchange = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-monitor-exchange_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="cloud-monitor-exchange_svg__a"
      x={11.251}
      y={12.751}
      width={12}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="cloud-monitor-exchange_svg__a"
      d="M17.251 20.251v3M15.001 23.251h4.5M.751 15.001l2.25-2.25 2.25 2.25M6.751 18.001l2.25 2.25-2.25 2.25M12 3.751a2.979 2.979 0 00-2.291 1.085 4.489 4.489 0 10-4.458 4.915H12a3 3 0 100-6z"
    />,
    <path
      className="cloud-monitor-exchange_svg__a"
      d="M3 12.751v4.5a3 3 0 003 3h3"
    />
  );

export default SvgCloudMonitorExchange;
