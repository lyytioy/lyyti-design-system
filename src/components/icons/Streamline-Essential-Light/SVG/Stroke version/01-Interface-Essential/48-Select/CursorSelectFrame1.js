import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelectFrame1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select-frame-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select-frame-1_svg__a"
      d="M8.99 4v4a1 1 0 01-1 1H4.01M15.01 4v4a1 1 0 001 1h3.98M8.99 20v-4a1 1 0 00-1-1H4.01M15.01 20v-4a1 1 0 011-1h3.98"
    />
  );

export default SvgCursorSelectFrame1;
