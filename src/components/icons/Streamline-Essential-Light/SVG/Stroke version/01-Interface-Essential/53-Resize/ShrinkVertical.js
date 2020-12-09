import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShrinkVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shrink-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shrink-vertical_svg__a"
      d="M23.5 23.499H.5M23.5.499H.5M11.5 14.499v9M11.5.499v10M8.5 17.499l3-3 3 3M8.5 7.499l3 3 3-3"
    />
  );

export default SvgShrinkVertical;
