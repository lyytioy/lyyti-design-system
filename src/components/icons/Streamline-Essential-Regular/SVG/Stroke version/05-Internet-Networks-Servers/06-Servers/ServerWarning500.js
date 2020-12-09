import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerWarning500 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-warning-500_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="server-warning-500_svg__a" d="M11.251.75l-7.5 12h7.5" />,
    <path className="server-warning-500_svg__a" d="M11.251.75l7.5 12h-7.5" />,
    <path
      className="server-warning-500_svg__a"
      d="M11.251 9.75a.375.375 0 10.375.375.375.375 0 00-.375-.375M11.251 6v1.5M2.251 23.25h2.625a1.874 1.874 0 001.875-1.875c0-3.333-4.5-.417-4.5-3.75V15.75h4.5M14.251 21a2.25 2.25 0 01-4.5 0v-3a2.25 2.25 0 014.5 0zM21.751 21a2.25 2.25 0 01-4.5 0v-3a2.25 2.25 0 014.5 0z"
    />
  );

export default SvgServerWarning500;
