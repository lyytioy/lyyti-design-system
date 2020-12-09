import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorTransfer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-transfer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-transfer_svg__a"
      d="M5.5 9.5H1.423a.963.963 0 01-.923-1v-7a.964.964 0 01.923-1h10.154a.964.964 0 01.923 1v6M2.5 11.5h3M.5 7.5h12M15.5 21.5v1.969M11.5 23.5h8M23.5 19.7a1.708 1.708 0 01-1.6 1.8H9.1a1.709 1.709 0 01-1.6-1.8v-8.4a1.71 1.71 0 011.6-1.8h12.8a1.709 1.709 0 011.6 1.8zM7.499 18.5H23.5"
    />
  );

export default SvgMonitorTransfer;
