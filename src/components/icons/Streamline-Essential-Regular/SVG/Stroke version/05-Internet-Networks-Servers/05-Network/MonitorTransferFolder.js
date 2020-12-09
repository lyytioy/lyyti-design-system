import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorTransferFolder = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-transfer-folder_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-transfer-folder_svg__a"
      d="M10.5 3.75H6.75a1.5 1.5 0 00-1.5 1.5v4.5"
    />,
    <path
      className="monitor-transfer-folder_svg__a"
      d="M3 7.5l2.25 2.25L7.5 7.5M17.25 2.25V1.5a.75.75 0 00-.75-.75h-2.25a.75.75 0 00-.75.75v5.25a1.5 1.5 0 001.5 1.5h6.75a1.5 1.5 0 001.5-1.5V3a.75.75 0 00-.75-.75z"
    />,
    <rect
      className="monitor-transfer-folder_svg__a"
      x={0.75}
      y={12.75}
      width={12}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-transfer-folder_svg__a"
      d="M6.75 20.25v3M4.5 23.25H9"
    />
  );

export default SvgMonitorTransferFolder;
