import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandVertical2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-vertical-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-vertical-2_svg__a"
      d="M11.5 1.499v22M22.5 12.499H.5M8.5 20.499l3 3 3-3M14.5 4.499l-3-3-3 3"
    />
  );

export default SvgExpandVertical2;
