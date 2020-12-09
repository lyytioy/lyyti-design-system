import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-monitor_svg__a"
      d="M20.339 15.339a4.874 4.874 0 10-4.728-8.474 7.5 7.5 0 10-13.36 5.888"
    />,
    <rect
      className="cloud-monitor_svg__a"
      x={5.25}
      y={12.751}
      width={12}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="cloud-monitor_svg__a" d="M11.25 20.251v3M9 23.251h4.5" />
  );

export default SvgCloudMonitor;
