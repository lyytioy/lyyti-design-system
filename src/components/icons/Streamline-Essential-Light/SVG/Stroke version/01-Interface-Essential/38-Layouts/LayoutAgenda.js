import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutAgenda = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-agenda_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="layout-agenda_svg__a"
      d="M23.5 9.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-7a1 1 0 011-1h21a1 1 0 011 1zM23.5 21.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-7a1 1 0 011-1h21a1 1 0 011 1z"
    />
  );

export default SvgLayoutAgenda;
