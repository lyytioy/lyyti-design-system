import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-4_svg__a"
      d="M23.5.499l-9.5 9.5M10 13.999l-9.5 9.5M17 .499h6.5v6.5M.5 16.999v6.5H7"
    />
  );

export default SvgExpand4;
