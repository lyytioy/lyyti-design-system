import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkWww = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-www_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-www_svg__a"
      d="M23.5 12a11.493 11.493 0 11-1.4-5.5 11.455 11.455 0 011.4 5.5z"
    />,
    <path
      className="network-www_svg__a"
      d="M17.017 6.5A11.693 11.693 0 0012 .5a11.693 11.693 0 00-5.017 6M6.982 17.5a11.7 11.7 0 005.018 6 10.4 10.4 0 005.1-6M3.282 4.5h17.436M3.282 19.5h17.436M9.5 10v1.345a6.01 6.01 0 00.429 2.228L10.5 15l1-3.5 1 3.5.571-1.427a6.01 6.01 0 00.429-2.228V10M15.5 10v1.345a6.01 6.01 0 00.429 2.228L16.5 15l1-3.5 1 3.5.571-1.427a6.01 6.01 0 00.429-2.228V10M3.5 10v1.345a6.01 6.01 0 00.429 2.228L4.5 15l1-3.5 1 3.5.571-1.427a6.01 6.01 0 00.429-2.228V10"
    />
  );

export default SvgNetworkWww;
