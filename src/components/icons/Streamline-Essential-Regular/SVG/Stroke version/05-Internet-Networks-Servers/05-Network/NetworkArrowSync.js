import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkArrowSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-arrow-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-arrow-sync_svg__a"
      d="M12 6v2.886a1.5 1.5 0 01-.668 1.249l-.48.32a1.5 1.5 0 00-.51 1.919l.237.474a1.5 1.5 0 002.013.67l.829-.414a1.5 1.5 0 00.829-1.342v-.242a1.5 1.5 0 011.026-1.42l2.024-.922"
    />,
    <circle className="network-arrow-sync_svg__a" cx={12} cy={12} r={6} />,
    <path
      className="network-arrow-sync_svg__a"
      d="M16.068 1.509A11.251 11.251 0 004.349 20.248M4.351 16.649v3.601H.75M7.932 22.492A11.251 11.251 0 0019.651 3.753"
    />,
    <path className="network-arrow-sync_svg__a" d="M19.649 7.352V3.75h3.601" />
  );

export default SvgNetworkArrowSync;
