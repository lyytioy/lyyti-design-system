import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsOn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-on_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="settings-on_svg__a"
      d="M.748 12.25a6 6 0 006 6h10.5a6 6 0 000-12h-10.5a6 6 0 00-6 6zM17.248 9.25v6M14.248 9.25v6"
    />
  );

export default SvgSettingsOn;
