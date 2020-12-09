import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="app-window-settings_svg__a"
      cx={17.281}
      cy={17.036}
      r={1.437}
    />,
    <path
      className="app-window-settings_svg__a"
      d="M18.5 11.475l.424 1.392a.951.951 0 001.124.653l1.412-.327a1.282 1.282 0 011.221 2.125l-.981 1.065a.962.962 0 000 1.306l.988 1.064a1.283 1.283 0 01-1.221 2.126l-1.412-.327a.951.951 0 00-1.124.653L18.5 22.6a1.275 1.275 0 01-2.442 0l-.424-1.392a.951.951 0 00-1.125-.653l-1.411.327a1.283 1.283 0 01-1.221-2.126l.988-1.064a.964.964 0 000-1.306l-.988-1.065a1.282 1.282 0 011.223-2.128l1.411.327a.951.951 0 001.125-.653l.424-1.392a1.275 1.275 0 012.44 0zM1.029 4.504h20M4.029 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M6.029 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.029 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-settings_svg__a"
      d="M9.029 16.5h-6a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v8"
    />
  );

export default SvgAppWindowSettings;
