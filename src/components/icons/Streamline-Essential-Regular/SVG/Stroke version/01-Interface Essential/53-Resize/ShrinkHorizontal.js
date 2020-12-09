import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShrinkHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shrink-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shrink-horizontal_svg__a"
      d="M.751.748v22.5M23.251.748v22.5M14.251 11.998h9M.751 11.998h9M18.001 8.248l-3.75 3.75 3.75 3.75M6.001 8.248l3.75 3.75-3.75 3.75"
    />
  );

export default SvgShrinkHorizontal;
