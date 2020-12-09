import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveShrinkVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-_shrink-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="move-_shrink-vertical_svg__a"
      d="M3.75.748l7.72 7.72a.749.749 0 001.06 0l7.72-7.72M3.75 23.248l7.72-7.719a.749.749 0 011.06 0l7.72 7.719"
    />
  );

export default SvgMoveShrinkVertical;
