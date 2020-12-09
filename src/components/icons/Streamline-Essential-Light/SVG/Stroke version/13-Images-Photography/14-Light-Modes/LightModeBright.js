import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeBright = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-bright_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-bright_svg__a"
      d="M5 9.5h14v5H5zM19.5 14.5a2.5 2.5 0 000-5H19v5zM4.5 14.5a2.5 2.5 0 010-5H5v5zM12 6.5v-4M7.5 7.5L5.5 4M16.5 7.5l2-3.5M12 17.5v4M7.5 16.5l-2 3.5M16.5 16.5l2 3.5"
    />
  );

export default SvgLightModeBright;
