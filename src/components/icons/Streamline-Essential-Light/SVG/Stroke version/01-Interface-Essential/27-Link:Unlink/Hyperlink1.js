import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHyperlink1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hyperlink-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hyperlink-1_svg__a"
      d="M10.084 14a5 5 0 110-4M13.916 14a5 5 0 100-4M17.5 11.999h-11"
    />
  );

export default SvgHyperlink1;
