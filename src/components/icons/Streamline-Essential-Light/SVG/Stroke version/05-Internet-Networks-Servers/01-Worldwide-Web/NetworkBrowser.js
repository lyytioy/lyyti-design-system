import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkBrowser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-browser_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-browser_svg__a"
      d="M.5 4.5h20M3.5 2.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M5.5 2.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.5 2.25a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="network-browser_svg__a"
      d="M7.5 16.5h-5a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v6"
    />,
    <path
      className="network-browser_svg__a"
      d="M16.5 23.5c-2-1.5-3-4.5-3-7s1-5.5 3-7M16.5 23.5c2-1.5 3-4.5 3-7s-1-5.5-3-7M10.174 13.5h12.652M10.174 19.5h12.652M9.5 16.5h14"
    />,
    <circle className="network-browser_svg__a" cx={16.5} cy={16.5} r={7} />
  );

export default SvgNetworkBrowser;
