import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeBright = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-bright_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-bright_svg__a"
      d="M20.25 9H3.75a3 3 0 000 6h16.5a3 3 0 000-6zM18 18l1.5 2.25M5.25 18l-1.5 2.25M11.25 22.5v-3.75M18 6l1.5-2.25M5.25 6l-1.5-2.25M11.25 1.5v3.75"
    />
  );

export default SvgLightModeBright;
