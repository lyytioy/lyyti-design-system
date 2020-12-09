import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-flash_svg__a"
      d="M19.53 9.5l-5.911 7.382a.376.376 0 00.286.618h2.625v6l5.911-7.382a.375.375 0 00-.286-.618H19.53zM1.53 4.504h20M4.53 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M6.53 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.53 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-flash_svg__a"
      d="M10.53 16.5h-7a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v6"
    />
  );

export default SvgAppWindowFlash;
