import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="add_svg__a" d="M12 1v22M23 12H1" />
  );

export default SvgAdd;
