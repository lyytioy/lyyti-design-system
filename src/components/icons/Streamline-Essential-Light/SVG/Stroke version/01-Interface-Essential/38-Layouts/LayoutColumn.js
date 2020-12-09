import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutColumn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-column_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="layout-column_svg__a"
      d="M6.5 21.5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-20a1 1 0 011-1h4a1 1 0 011 1zM14.5 21.5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-20a1 1 0 011-1h4a1 1 0 011 1zM22.5 21.5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-20a1 1 0 011-1h4a1 1 0 011 1z"
    />
  );

export default SvgLayoutColumn;
