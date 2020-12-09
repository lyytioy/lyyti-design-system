import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="settings-off_svg__a"
      d="M18.5 7h-13a5 5 0 00-5 5 5 5 0 005 5h13a5 5 0 005-5 5 5 0 00-5-5zM6 9.501v5M8 9.501v5"
    />
  );

export default SvgSettingsOff;
