import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-disable_svg__a"
      d="M5.96 11.284a5.258 5.258 0 015.263-1.3M3.07 7.822a9.75 9.75 0 0113.165-.029M.75 3.885a14.252 14.252 0 0117.85.007"
    />,
    <circle className="wifi-disable_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path className="wifi-disable_svg__a" d="M13.008 21.492l8.484-8.484" />
  );

export default SvgWifiDisable;
