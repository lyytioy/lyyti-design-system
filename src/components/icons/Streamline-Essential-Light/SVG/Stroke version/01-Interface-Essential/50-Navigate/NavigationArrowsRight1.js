import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsRight1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-right-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-right-1_svg__a"
      d="M9.5 19.494v2.475a.5.5 0 00.808.393L23 12.39a.5.5 0 000-.786L10.308 1.633a.5.5 0 00-.808.393v2.468"
    />,
    <path
      className="navigation-arrows-right-1_svg__a"
      d="M1.5 21.968a.5.5 0 00.808.393L15 12.39a.5.5 0 000-.786L2.308 1.633a.5.5 0 00-.808.393v19.942z"
    />
  );

export default SvgNavigationArrowsRight1;
