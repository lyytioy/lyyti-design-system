import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkLive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-live_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-live_svg__a"
      d="M23.5 12a11.493 11.493 0 11-1.4-5.5 11.455 11.455 0 011.4 5.5z"
    />,
    <path
      className="network-live_svg__a"
      d="M17.017 6.5A11.693 11.693 0 0012 .5a11.693 11.693 0 00-5.017 6M6.982 17.5a11.7 11.7 0 005.018 6 10.4 10.4 0 005.1-6M3.282 4.5h17.436M3.282 19.5h17.436M9.5 14.5v-5M11.5 9.5v1.7a5.954 5.954 0 001 3.3 5.954 5.954 0 001-3.3V9.5M5.5 9.5v4a1 1 0 001 1h1M17.5 14.5h-1a1 1 0 01-1-1v-3a1 1 0 011-1h1M15.5 12.5h2"
    />
  );

export default SvgNetworkLive;
