import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiDelete = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-delete_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-delete_svg__a"
      d="M5.96 11.284a5.253 5.253 0 015.877-1.066M3.07 7.822a9.75 9.75 0 0113.165-.029M.75 3.885a14.252 14.252 0 0117.85.007"
    />,
    <circle className="wifi-delete_svg__a" cx={17.25} cy={17.251} r={6} />,
    <path className="wifi-delete_svg__a" d="M19.5 15L15 19.5M15 15l4.5 4.5" />
  );

export default SvgWifiDelete;
