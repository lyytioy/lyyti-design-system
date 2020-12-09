import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHyperlink = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hyperlink_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hyperlink_svg__a"
      d="M10.082 9.5A4.47 4.47 0 006.75 8h-1.5a4.5 4.5 0 000 9h1.5a4.474 4.474 0 003.332-1.5M13.918 9.5A4.469 4.469 0 0117.25 8h1.5a4.5 4.5 0 110 9h-1.5a4.472 4.472 0 01-3.332-1.5M6.75 12.499h10.5"
    />
  );

export default SvgHyperlink;
