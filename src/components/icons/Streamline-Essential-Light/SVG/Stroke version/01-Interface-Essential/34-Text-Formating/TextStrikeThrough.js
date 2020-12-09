import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextStrikeThrough = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-strike-through_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="text-strike-through_svg__a"
      d="M.5 13.498h23M15.5 6.5a5.857 5.857 0 00-5.857-6A5.143 5.143 0 008.2 10.578l3.977 1.16A6 6 0 0110.5 23.5a7 7 0 01-7-7"
    />
  );

export default SvgTextStrikeThrough;
