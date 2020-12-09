import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHyperlink2Blue = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hyperlink-2-blue_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;color:#25abc6}"
        }
      </style>
    </defs>,
    <path
      className="hyperlink-2-blue_svg__a"
      d="M6.75 17.249l10.5-10.5M7.735 12.021a4.472 4.472 0 00-3.417 1.3l-2.25 2.25a4.5 4.5 0 006.364 6.364l2.25-2.25a4.472 4.472 0 001.3-3.417M16.265 11.976a4.473 4.473 0 003.417-1.3l2.25-2.25a4.5 4.5 0 00-6.364-6.364l-2.25 2.25a4.475 4.475 0 00-1.295 3.417"
    />
  );

export default SvgHyperlink2Blue;
