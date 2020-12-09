import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHandDrag1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hand-drag-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hand-drag-1_svg__a"
      d="M16.5 8.247v-1.5a1.5 1.5 0 00-3 0V6a1.5 1.5 0 00-3 0v.75a1.5 1.5 0 00-3 0V9a3 3 0 00-3 3 7.017 7.017 0 001.308 4.081l1.1 1.535a4.5 4.5 0 003.658 1.884h3.813a5.121 5.121 0 005.121-5.124V8.247a1.5 1.5 0 00-3 0zM7.5 8.997v2.25M10.5 8.247v-1.5M13.5 8.247v-1.5M16.5 8.247"
    />
  );

export default SvgHandDrag1;
