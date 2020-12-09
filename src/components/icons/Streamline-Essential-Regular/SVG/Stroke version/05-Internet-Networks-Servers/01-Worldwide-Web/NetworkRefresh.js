import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-refresh_svg__a"
      d="M9.952 23.25s5.8-.75 7.3-6h-3l5.452-4.5 3.548 4.5H21s-.548 6-11.048 6zM5.994 21.514a11.251 11.251 0 1117.152-11.048"
    />,
    <path
      className="network-refresh_svg__a"
      d="M7.755 19.5a26.6 26.6 0 01-1-7.5c0-4.633 1.018-8.688 2.539-10.921M.775 11.25H14.25M2.999 5.25H21M2.048 17.25h9.202M14.711 1.079c1.348 1.978 2.3 5.386 2.5 9.359"
    />
  );

export default SvgNetworkRefresh;
