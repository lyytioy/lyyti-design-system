import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsRight1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-right-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-right-1_svg__a"
      d="M14.472 13.14a1.5 1.5 0 000-2.286L3.222 1.1A1.5 1.5 0 00.751 2.247v19.5a1.5 1.5 0 002.471 1.143z"
    />,
    <path
      className="navigation-arrows-right-1_svg__a"
      d="M9 21v.749a1.5 1.5 0 002.471 1.143l11.25-9.75a1.5 1.5 0 000-2.286L11.472 1.1A1.5 1.5 0 009 2.247V3"
    />
  );

export default SvgNavigationArrowsRight1;
