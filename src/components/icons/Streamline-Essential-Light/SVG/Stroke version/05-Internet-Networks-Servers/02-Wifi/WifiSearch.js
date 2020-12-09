import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-search_svg__a"
      d="M3.06 7.623a8.946 8.946 0 0112.653 0M18.215 4.169a12.526 12.526 0 00-17.715 0M5.617 11.076a5.372 5.372 0 017.594 0M15.713 7.623a8.946 8.946 0 00-12.653 0M13.211 11.076a5.372 5.372 0 00-7.594 0M9.358 17.5a1.79 1.79 0 110-3.579"
    />,
    <circle className="wifi-search_svg__a" cx={16.744} cy={17.029} r={4.529} />,
    <path className="wifi-search_svg__a" d="M23.215 23.5l-3.248-3.248" />
  );

export default SvgWifiSearch;
