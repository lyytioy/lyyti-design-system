import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveShrinkVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-_shrink-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="move-_shrink-vertical_svg__a"
      d="M20.5.499l-8.5 8.5-8.5-8.5M20.5 23.499l-8.5-8.5-8.5 8.5"
    />
  );

export default SvgMoveShrinkVertical;
