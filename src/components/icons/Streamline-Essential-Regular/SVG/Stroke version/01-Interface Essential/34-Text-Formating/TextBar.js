import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextBar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-bar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="text-bar_svg__a"
      d="M12 18.748v-13.5M7.5 23.248a4.5 4.5 0 004.5-4.5 4.5 4.5 0 004.5 4.5M7.5.748a4.5 4.5 0 014.5 4.5 4.5 4.5 0 014.5-4.5M9 14.248h6"
    />
  );

export default SvgTextBar;
