import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConnector1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".connector-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="connector-1_svg__a"
      d="M5 13H1M1 11h4M19 11h4M23 13h-4M13 5V1M11 1v4M11 19v4M13 23v-4M14 19a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 001-1v-4a1 1 0 00-1-1h-2a1 1 0 01-1-1V6a1 1 0 00-1-1h-4a1 1 0 00-1 1v2a1 1 0 01-1 1H6a1 1 0 00-1 1v4a1 1 0 001 1h2a1 1 0 011 1v2a1 1 0 001 1z"
    />
  );

export default SvgConnector1;
