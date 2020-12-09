import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchSelect = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-select_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="retouch-select_svg__a"
      d="M19.5 8.25a2.231 2.231 0 002.5 2.5c-1.615-.006-2.418.86-2.5 2.5a2.211 2.211 0 00-2.5-2.5 2.232 2.232 0 002.5-2.5zM12.5 2.25c-.011 2.827 1.368 4.433 4.5 4.5-2.907-.011-4.352 1.549-4.5 4.5-.025-2.784-1.273-4.5-4.5-4.5 2.888-.04 4.489-1.434 4.5-4.5zM.5 18.75v2a1 1 0 001 1h2M3.5 2.75h-2a1 1 0 00-1 1v2M23.5 5.75v-2a1 1 0 00-1-1h-2M20.5 21.75h2a1 1 0 001-1v-2M17.158 14.75A6 6 0 117 8.781"
    />
  );

export default SvgRetouchSelect;
