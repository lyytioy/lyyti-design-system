import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-signal_svg__a"
      d="M7.5 23.5c-2-1.5-3-4.5-3-7s1-5.5 3-7M7.5 23.5c2-1.5 3-4.5 3-7s-1-5.5-3-7M1.174 13.5h12.652M1.174 19.5h12.652M.5 16.5h14"
    />,
    <circle className="network-signal_svg__a" cx={7.5} cy={16.5} r={7} />,
    <path
      className="network-signal_svg__a"
      d="M17.794 11.027a4.918 4.918 0 00-4.821-4.821M20.647 11.067a7.868 7.868 0 00-7.714-7.714M23.5 11.107A10.819 10.819 0 0012.893.5"
    />
  );

export default SvgNetworkSignal;
