import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-warning_svg__a"
      d="M17.5 9.5V5.914a1 1 0 00-.293-.707L12.794.793A1 1 0 0012.087.5H1.5a1 1 0 00-1 1v8h1v3h-1v10a1 1 0 001 1h8M4.501 3.5v5M7.501 3.5v5M10.501 3.5v5M13.501 5.5v4M17.5 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.499 18.5v-3"
    />,
    <path
      className="sd-card-warning_svg__a"
      d="M18.337 12.5a.949.949 0 00-1.676 0l-5.056 9.634a.923.923 0 00.031.914.948.948 0 00.807.448h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914z"
    />
  );

export default SvgSdCardWarning;
