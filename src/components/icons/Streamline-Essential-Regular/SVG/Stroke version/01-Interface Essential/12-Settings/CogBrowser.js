import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogBrowser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-browser_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cog-browser_svg__a"
      d="M15.75 21.751H21a1.5 1.5 0 001.5-1.5v-16.5a1.5 1.5 0 00-1.5-1.5H3a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h5.25M1.5 6.001h21"
    />,
    <circle className="cog-browser_svg__a" cx={12} cy={14.701} r={3.75} />,
    <path
      className="cog-browser_svg__a"
      d="M12 10.951v-1.8M12 20.251v-1.8M15.75 14.701h1.8M6.45 14.701h1.8M8.459 10.742l1.107 1.106M15.541 10.742l-1.107 1.106M8.459 18.66l1.107-1.107M15.541 18.66l-1.107-1.107M12 13.951a.75.75 0 11-.75.75.75.75 0 01.75-.75"
    />
  );

export default SvgCogBrowser;
