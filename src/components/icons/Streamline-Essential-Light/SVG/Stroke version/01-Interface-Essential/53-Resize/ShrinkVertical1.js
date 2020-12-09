import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShrinkVertical1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shrink-vertical-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shrink-vertical-1_svg__a"
      d="M11.5 23.499v-9M7.5 18.499l4-4 4 4M11.5 1.499v9M7.5 6.499l4 4 4-4M20.5 12.499h-19"
    />
  );

export default SvgShrinkVertical1;
