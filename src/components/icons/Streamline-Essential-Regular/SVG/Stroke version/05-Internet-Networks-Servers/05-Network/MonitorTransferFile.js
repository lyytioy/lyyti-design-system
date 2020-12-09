import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorTransferFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-transfer-file_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-transfer-file_svg__a"
      d="M17.25 9.75h4.5a1.5 1.5 0 001.5-1.5V3.622a1.5 1.5 0 00-.439-1.061L21.439 1.19a1.5 1.5 0 00-1.061-.44H17.25a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5z"
    />,
    <path
      className="monitor-transfer-file_svg__a"
      d="M18.75.75v3a1.5 1.5 0 001.5 1.5h3M12.75 3.75h-6a1.5 1.5 0 00-1.5 1.5v4.5"
    />,
    <path
      className="monitor-transfer-file_svg__a"
      d="M3 7.5l2.25 2.25L7.5 7.5"
    />,
    <rect
      className="monitor-transfer-file_svg__a"
      x={0.75}
      y={12.75}
      width={12}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-transfer-file_svg__a"
      d="M6.75 20.25v3M4.5 23.25H9"
    />
  );

export default SvgMonitorTransferFile;
