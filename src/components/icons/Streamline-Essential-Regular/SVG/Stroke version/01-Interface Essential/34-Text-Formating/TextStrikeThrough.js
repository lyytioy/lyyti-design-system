import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextStrikeThrough = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-strike-through_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="text-strike-through_svg__a"
      d="M18.75.748h-7.023c-2.485 0-4.977 2.014-4.977 4.5 0 6.75 12 6.75 12 13.5a4.5 4.5 0 01-4.5 4.5h-7.5M.75 12.748h22.5"
    />
  );

export default SvgTextStrikeThrough;
