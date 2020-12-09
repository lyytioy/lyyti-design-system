import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".exit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="exit_svg__a"
      d="M15.75 15.754v-7.5M20.25 15.754v-7.5M18.75 8.254h3M9 8.254l3 7.5M12 8.254l-3 7.5M5.25 15.754h-1.5a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h1.5M2.25 12.754h3M.75 3.754h22.5M.75 20.254h22.5"
    />
  );

export default SvgExit;
