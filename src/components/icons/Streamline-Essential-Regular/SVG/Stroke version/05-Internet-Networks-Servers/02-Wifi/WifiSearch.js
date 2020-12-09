import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-search_svg__a"
      d="M5.96 11.284A5.234 5.234 0 019.668 9.75a5.342 5.342 0 01.855.069M3.07 7.822a9.75 9.75 0 0112.7-.43M.75 3.885a14.252 14.252 0 0117.85.007"
    />,
    <circle className="wifi-search_svg__a" cx={15.75} cy={15.75} r={5.25} />,
    <path className="wifi-search_svg__a" d="M23.25 23.25l-3.788-3.787" />
  );

export default SvgWifiSearch;
