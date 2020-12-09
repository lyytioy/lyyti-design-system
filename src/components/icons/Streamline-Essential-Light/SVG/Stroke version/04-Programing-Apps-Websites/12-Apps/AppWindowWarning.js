import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-warning_svg__a"
      d="M.5 4.504h20M3.5 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M5.5 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.5 2.254a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-warning_svg__a"
      d="M9.5 16.5h-7a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v8M17.5 20.505a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 18.505v-3"
    />,
    <path
      className="app-window-warning_svg__a"
      d="M18.338 12.508a.95.95 0 00-1.676 0l-5.056 9.634a.921.921 0 00.032.914.945.945 0 00.806.449h10.112a.946.946 0 00.807-.449.923.923 0 00.031-.914z"
    />
  );

export default SvgAppWindowWarning;
