import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandCorner = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-corner_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="expand-corner_svg__a" d="M5.5 23.499v-18h18" />,
    <path
      className="expand-corner_svg__a"
      d="M18.5.499l5 5-5 5M.5 18.499l5 5 5-5"
    />
  );

export default SvgExpandCorner;
