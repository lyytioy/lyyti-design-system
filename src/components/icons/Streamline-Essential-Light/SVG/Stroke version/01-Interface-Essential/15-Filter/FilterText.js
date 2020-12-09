import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFilterText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".filter-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="filter-text_svg__a"
      d="M16.047 2.16A1 1 0 0015.294.5H2.7a1 1 0 00-.751 1.66L7.5 8.5v5.631a1 1 0 001.555.832l1-.667a1 1 0 00.445-.832V8.5zM17.5 14.502h4M15.5 17.502h6M15.5 20.502h6M13.5 12.5a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1h-8a1 1 0 01-1-1z"
    />
  );

export default SvgFilterText;
