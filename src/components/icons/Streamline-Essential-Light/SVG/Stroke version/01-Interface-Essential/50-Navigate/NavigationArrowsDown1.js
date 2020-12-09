import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsDown1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-down-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-down-1_svg__a"
      d="M4.5 9.5H2.029a.5.5 0 00-.393.808L11.607 23a.5.5 0 00.786 0l9.971-12.691a.5.5 0 00-.393-.808H19.5"
    />,
    <path
      className="navigation-arrows-down-1_svg__a"
      d="M2.029 1.5a.5.5 0 00-.393.808L11.607 15a.5.5 0 00.786 0l9.971-12.694a.5.5 0 00-.393-.808z"
    />
  );

export default SvgNavigationArrowsDown1;
