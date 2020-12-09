import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgClose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".close_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="close_svg__a" d="M.5.499l23 23M23.5.499l-23 23" />
  );

export default SvgClose;
