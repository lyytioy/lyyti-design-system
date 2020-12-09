import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-download_svg__a"
      d="M9 23.5h6M12 21.5v2M4 19.5h16M12 11.5V.5M16 7.5l-4 4-4-4M18 11.5h.5A1.5 1.5 0 0120 13v7a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 20v-7a1.5 1.5 0 011.5-1.5H6"
    />
  );

export default SvgMonitorDownload;
