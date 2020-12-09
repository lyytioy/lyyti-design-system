import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudMonitorUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-monitor-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-monitor-upload_svg__a"
      d="M5 23.022h7M8.5 21.022v2M.5 19.022h16M20.761 9.522A3.121 3.121 0 0023.5 6.477a3.038 3.038 0 00-3.153-3.037 4.254 4.254 0 00-8.1 1.565A2.283 2.283 0 009.5 7.239a2.312 2.312 0 002.435 2.283zM16.5 11.522v7.912a1.546 1.546 0 01-1.5 1.588H2a1.546 1.546 0 01-1.5-1.588v-8.912a1.5 1.5 0 011.5-1.5h5M8.5 12.522v4.5"
    />,
    <path className="cloud-monitor-upload_svg__a" d="M6.5 14.522l2-2 2 2" />
  );

export default SvgCloudMonitorUpload;
