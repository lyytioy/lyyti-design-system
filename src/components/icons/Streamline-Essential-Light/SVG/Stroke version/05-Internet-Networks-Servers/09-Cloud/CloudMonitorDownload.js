import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudMonitorDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-monitor-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-monitor-download_svg__a"
      d="M5 23.5h7M8.5 21.5v2M.5 19.5h16M20.761 9.522A3.121 3.121 0 0023.5 6.477a3.038 3.038 0 00-3.153-3.037 4.254 4.254 0 00-8.1 1.565A2.283 2.283 0 009.5 7.239a2.312 2.312 0 002.435 2.283zM16.5 12v7.912A1.546 1.546 0 0115 21.5H2a1.546 1.546 0 01-1.5-1.588V11A1.5 1.5 0 012 9.5h5M8.5 17.5V13"
    />,
    <path className="cloud-monitor-download_svg__a" d="M6.5 15.5l2 2 2-2" />
  );

export default SvgCloudMonitorDownload;
