import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZoomIn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zoom-in_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="zoom-in_svg__a"
      d="M18.875 9.811A9.063 9.063 0 119.813.749a9.063 9.063 0 019.062 9.062zM5.25 9.749h9M9.75 14.249v-9M16.221 16.219l7.029 7.03"
    />
  );

export default SvgZoomIn;
