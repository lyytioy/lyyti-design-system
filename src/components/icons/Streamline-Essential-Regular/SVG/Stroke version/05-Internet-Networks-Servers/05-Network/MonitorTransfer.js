import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorTransfer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-transfer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-transfer_svg__a"
      d="M12.75 6.75v-4.5a1.5 1.5 0 00-1.5-1.5h-9a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h3M3.75 12.75h1.5"
    />,
    <rect
      className="monitor-transfer_svg__a"
      x={8.25}
      y={9.75}
      width={15}
      height={10.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-transfer_svg__a"
      d="M15.75 20.25v3M13.5 23.25H18M8.25 17.25h15"
    />
  );

export default SvgMonitorTransfer;
