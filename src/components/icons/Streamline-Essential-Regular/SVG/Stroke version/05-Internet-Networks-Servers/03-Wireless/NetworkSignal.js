import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="network-signal_svg__a"
      cx={7.516}
      cy={16.487}
      r={6.75}
    />,
    <path
      className="network-signal_svg__a"
      d="M1.15 18.737h12.731M1.15 14.237h12.731M6.059 9.894a21.886 21.886 0 00.51 13.277M8.972 9.894a21.781 21.781 0 01.794 5.843 21.724 21.724 0 01-1.3 7.434M12.171 5.987A5.959 5.959 0 0118 11.816M13.92.75a9.749 9.749 0 019.33 9.288"
    />
  );

export default SvgNetworkSignal;
