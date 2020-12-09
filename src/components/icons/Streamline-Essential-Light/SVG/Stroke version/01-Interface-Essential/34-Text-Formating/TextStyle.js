import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextStyle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-style_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="text-style_svg__a"
      d="M3 3.5v-2a1 1 0 011-1h16a1 1 0 011 1v2M12 .498v23M8.5 23.498h7"
    />
  );

export default SvgTextStyle;
