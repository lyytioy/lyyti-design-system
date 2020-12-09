import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgClose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".close_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="close_svg__a"
      d="M.75 23.249l22.5-22.5M23.25 23.249L.75.749"
    />
  );

export default SvgClose;
