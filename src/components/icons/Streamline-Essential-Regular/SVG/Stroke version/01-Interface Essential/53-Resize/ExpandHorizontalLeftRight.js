import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandHorizontalLeftRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-horizontal-left-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-horizontal-left-right_svg__a"
      d="M14.251.748v22.5M9.751.748v22.5M.751 11.998h9M14.251 11.998h9M4.501 8.248l-3.75 3.75 3.75 3.75M19.501 8.248l3.75 3.75-3.75 3.75"
    />
  );

export default SvgExpandHorizontalLeftRight;
