import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConnector = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".connector_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="connector_svg__a"
      d="M15 13.125v-3.75a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5v3.75H5.25a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5zM20.25 16.125h3M.75 16.125h3M12 4.875v3"
    />
  );

export default SvgConnector;
