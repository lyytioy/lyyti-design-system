import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSubtractTab = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".subtract-tab_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="subtract-tab_svg__a"
      d="M18.938 18H2.25a1.5 1.5 0 01-1.5-1.5v-9A1.5 1.5 0 012.25 6h16.688a1.5 1.5 0 011.272.705l2.812 4.5a1.5 1.5 0 010 1.59L20.21 17.3a1.5 1.5 0 01-1.272.7zM4.5 12H9"
    />
  );

export default SvgSubtractTab;
