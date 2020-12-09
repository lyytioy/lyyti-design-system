import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAntennaHouseConnect = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".antenna-house-connect_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="antenna-house-connect_svg__a"
      d="M9 19.464L5.262 10.5 1.5 19.463M5.25 10.5V8.25M3 5.625a2.119 2.119 0 012.25-1.958A2.119 2.119 0 017.5 5.625"
    />,
    <path
      className="antenna-house-connect_svg__a"
      d="M.75 4.667A4.239 4.239 0 015.25.75a4.239 4.239 0 014.5 3.917M5.25 20.25v2.021a1 1 0 001.018.979h11.464a1 1 0 001.018-.979V19.5M21.75 14v5.5h-6V14"
    />,
    <path
      className="antenna-house-connect_svg__a"
      d="M14.25 15l4.5-3 4.5 3M3.058 15.75h4.393"
    />
  );

export default SvgAntennaHouseConnect;
