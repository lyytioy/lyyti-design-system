import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="server-warning_svg__a"
      d="M21.5 4.5a2 2 0 01-2 2h-17a2 2 0 01-2-2v-2a2 2 0 012-2h17a2 2 0 012 2zM2.5 12.5a2 2 0 01-2-2v-2a2 2 0 012-2h17a2 2 0 012 2v2"
    />,
    <path
      className="server-warning_svg__a"
      d="M4.75 3.25A.25.25 0 105 3.5a.25.25 0 00-.25-.25M8.25 3.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M4.75 9.25A.25.25 0 105 9.5a.25.25 0 00-.25-.25M8.25 9.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M11 18.5H2.5a2 2 0 01-2-2v-2a2 2 0 012-2h11"
    />,
    <path
      className="server-warning_svg__a"
      d="M4.75 15.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.25 15.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M17.5 20.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M17.5 18.5v-3"
    />,
    <path
      className="server-warning_svg__a"
      d="M18.338 12.5a.95.95 0 00-1.676 0l-5.056 9.634a.923.923 0 00.031.914.947.947 0 00.807.449h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914z"
    />
  );

export default SvgServerWarning;
