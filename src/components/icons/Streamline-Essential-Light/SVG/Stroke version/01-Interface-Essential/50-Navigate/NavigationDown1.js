import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationDown1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-down-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-down-1_svg__a"
      d="M23.5 12l-10.679 7.426a1.545 1.545 0 01-1.642 0L.5 12"
    />,
    <path
      className="navigation-down-1_svg__a"
      d="M23.5 5c0-.55-.369-.743-.821-.429l-9.858 6.857a1.545 1.545 0 01-1.642 0L1.321 4.569C.869 4.255.5 4.448.5 5v1.5a2.15 2.15 0 00.821 1.571l9.858 6.857a1.545 1.545 0 001.642 0l9.858-6.857A2.15 2.15 0 0023.5 6.5z"
    />
  );

export default SvgNavigationDown1;
