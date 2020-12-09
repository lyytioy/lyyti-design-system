import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsOn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-on_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="settings-on_svg__a"
      d="M5.5 7h13a5 5 0 015 5 5 5 0 01-5 5h-13a5 5 0 01-5-5 5 5 0 015-5zM18 9.501v5M16 9.501v5"
    />
  );

export default SvgSettingsOn;
