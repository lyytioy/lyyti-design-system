import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveExpandVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-expand-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="move-expand-vertical_svg__a"
      d="M20.5 8.999L12 .499l-8.5 8.5M20.5 14.999l-8.5 8.5-8.5-8.5"
    />
  );

export default SvgMoveExpandVertical;
