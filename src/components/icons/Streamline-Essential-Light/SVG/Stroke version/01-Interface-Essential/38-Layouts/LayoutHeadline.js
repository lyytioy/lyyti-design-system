import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutHeadline = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-headline_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="layout-headline_svg__a"
      d="M23.5 5.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-3a1 1 0 011-1h21a1 1 0 011 1zM23.5 13.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-3a1 1 0 011-1h21a1 1 0 011 1zM23.5 21.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-3a1 1 0 011-1h21a1 1 0 011 1z"
    />
  );

export default SvgLayoutHeadline;
