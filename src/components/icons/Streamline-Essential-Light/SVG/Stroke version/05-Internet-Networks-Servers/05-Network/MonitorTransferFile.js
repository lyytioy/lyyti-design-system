import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorTransferFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-transfer-file_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-transfer-file_svg__a"
      d="M23.5 9a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5V1a.5.5 0 01.5-.5h3a1.391 1.391 0 01.854.354l2.292 2.292A1.391 1.391 0 0123.5 4z"
    />,
    <path
      className="monitor-transfer-file_svg__a"
      d="M23.5 3.5H20v-3M5 23.5h6M8 21.5v2M.5 19.5h15M8.5 10.5V9a5 5 0 015-5"
    />,
    <path
      className="monitor-transfer-file_svg__a"
      d="M10.5 8.5l-2 2-2-2M12.5 11.5H14a1.5 1.5 0 011.5 1.5v7a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 20v-7A1.5 1.5 0 012 11.5h2"
    />
  );

export default SvgMonitorTransferFile;
