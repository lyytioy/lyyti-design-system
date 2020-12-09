import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConnector = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".connector_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="connector_svg__a"
      d="M19 14.5h4M23 16.5h-4M5 16.5H1M1 14.5h4M13 8.5v-4M11 4.5v4M18 18.5a1 1 0 001-1v-4a1 1 0 00-1-1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1h-4a1 1 0 00-1 1v2a1 1 0 01-1 1H6a1 1 0 00-1 1v4a1 1 0 001 1z"
    />
  );

export default SvgConnector;
