import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorTransferFolder = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-transfer-folder_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-transfer-folder_svg__a"
      d="M5 23.5h6M8 21.5v2M.5 19.5h15M8 10.5V9c0-2.762.736-5 3.5-5"
    />,
    <path
      className="monitor-transfer-folder_svg__a"
      d="M10 8.5l-2 2-2-2M12.5 11.5H14a1.5 1.5 0 011.5 1.5v7a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 20v-7A1.5 1.5 0 012 11.5h2M14.5 8.5H22A1.5 1.5 0 0023.5 7V3.5h-8v4a1 1 0 01-2 0v-7h2v1h7v2"
    />
  );

export default SvgMonitorTransferFolder;
