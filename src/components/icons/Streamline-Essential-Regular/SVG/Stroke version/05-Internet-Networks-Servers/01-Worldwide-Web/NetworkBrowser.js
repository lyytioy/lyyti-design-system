import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkBrowser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-browser_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="network-browser_svg__a" cx={16.5} cy={16.5} r={6.75} />,
    <path
      className="network-browser_svg__a"
      d="M10.134 18.75h12.732M10.134 14.25h12.732M15.044 9.908a21.863 21.863 0 00.51 13.276M17.956 9.908a21.734 21.734 0 01.794 5.842 21.7 21.7 0 01-1.3 7.434"
    />,
    <path
      className="network-browser_svg__a"
      d="M21.75 7.5V2.366A1.62 1.62 0 0020.135.75H2.357A1.612 1.612 0 00.75 2.357v15.528A1.62 1.62 0 002.365 19.5H6.75M.75 5.25h21M6.75.75v4.5M11.25.75v4.5"
    />
  );

export default SvgNetworkBrowser;
