import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveExpandVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-expand-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="move-expand-vertical_svg__a"
      d="M3.75 15l7.72 7.72a.751.751 0 001.06 0L20.25 15M3.75 9l7.72-7.72a.749.749 0 011.06 0L20.25 9"
    />
  );

export default SvgMoveExpandVertical;
