import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerWarning500 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-warning-500_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="server-warning-500_svg__a"
      d="M11.5 9.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M11.5 7.5v-3"
    />,
    <path
      className="server-warning-500_svg__a"
      d="M12.338 1.5a.95.95 0 00-1.676 0l-5.056 9.637a.923.923 0 00.031.914.947.947 0 00.807.449h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914zM7.5 15.5h-5v3a1 1 0 001 1h2a2 2 0 010 4h-3M14.5 21a2.5 2.5 0 01-5 0v-3a2.5 2.5 0 015 0zM21.5 21a2.5 2.5 0 01-5 0v-3a2.5 2.5 0 015 0z"
    />
  );

export default SvgServerWarning500;
