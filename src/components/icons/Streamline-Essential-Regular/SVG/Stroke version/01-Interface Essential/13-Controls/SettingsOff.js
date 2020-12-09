import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="settings-off_svg__a"
      d="M23.248 12a6 6 0 01-6 6h-10.5a6 6 0 010-12h10.5a6 6 0 016 6zM6.748 9v6M9.748 9v6"
    />
  );

export default SvgSettingsOff;
