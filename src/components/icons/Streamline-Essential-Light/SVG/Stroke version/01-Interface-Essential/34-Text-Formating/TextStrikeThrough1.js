import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextStrikeThrough1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-strike-through-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="text-strike-through-1_svg__a"
      d="M3 3.5v-2a1 1 0 011-1h16a1 1 0 011 1v2M12 14.498v9M12 .498v10M8.5 23.498h7M3.03 12.498h17.969"
    />
  );

export default SvgTextStrikeThrough1;
