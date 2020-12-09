import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandHorizontal2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-horizontal-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-horizontal-2_svg__a"
      d="M11.5 1.499v22M22.5 12.499H.5M3.5 9.499l-3 3 3 3M19.5 15.499l3-3-3-3"
    />
  );

export default SvgExpandHorizontal2;
