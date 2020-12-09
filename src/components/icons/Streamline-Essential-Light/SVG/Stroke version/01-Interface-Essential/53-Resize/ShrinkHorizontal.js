import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShrinkHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shrink-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shrink-horizontal_svg__a"
      d="M23.5.499v23M.5.499v23M14.5 12.499h9M.5 12.499h10M17.5 15.499l-3-3 3-3M7.5 15.499l3-3-3-3"
    />
  );

export default SvgShrinkHorizontal;
