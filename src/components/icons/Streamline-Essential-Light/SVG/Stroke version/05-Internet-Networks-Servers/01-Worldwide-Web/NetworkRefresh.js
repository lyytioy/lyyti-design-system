import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-refresh_svg__a"
      d="M1.898 17.5h12.068M2.511 5.5h18.984M19.998 11.5H.51M4.878 21.031a11.5 11.5 0 1118.462-11.01M11.269.526C6.256 5.957 5.507 12.754 8.9 19.508M12.73.526A15.7 15.7 0 0117.175 11.5M17 16.001l5-3 1.5 5.5M21.822 13.108A12.5 12.5 0 019.5 23.5"
    />
  );

export default SvgNetworkRefresh;
