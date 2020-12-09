import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudMonitorDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-monitor-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-monitor-download_svg__a"
      d="M9 9.75a4.5 4.5 0 114.458-4.914A2.994 2.994 0 1115.75 9.75H15M9 14.25l3 3v-6M15 14.25l-3 3M12 20.25v3M8.25 23.25h7.5"
    />,
    <path
      className="cloud-monitor-download_svg__a"
      d="M4.5 12v6.75a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5V12"
    />
  );

export default SvgCloudMonitorDownload;
