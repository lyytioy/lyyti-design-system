import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-download_svg__a"
      d="M5.96 11.284a5.253 5.253 0 015.877-1.066M3.07 7.822a9.75 9.75 0 0113.165-.029M.75 3.885a14.252 14.252 0 0117.85.007M23.177 16.3a6 6 0 11-4.977-4.977 6.006 6.006 0 014.977 4.977zM17.25 14.25v6M17.25 20.25L15 18M17.25 20.25L19.5 18"
    />
  );

export default SvgWifiDownload;
