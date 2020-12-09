import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutArray = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-array_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="layout-array_svg__a"
      d="M4.5 20.5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-17a1 1 0 011-1h2a1 1 0 011 1zM23.5 20.5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-17a1 1 0 011-1h2a1 1 0 011 1zM17.5 3.5a1 1 0 00-1-1h-9a1 1 0 00-1 1v17a1 1 0 001 1h9a1 1 0 001-1z"
    />
  );

export default SvgLayoutArray;
