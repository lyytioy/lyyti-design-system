import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowPasswordCorrect = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-password-correct_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-password-correct_svg__a"
      d="M21.76 9.754v-7.5a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6M.76 5.254h21"
    />,
    <circle
      className="app-window-password-correct_svg__a"
      cx={17.26}
      cy={17.254}
      r={6}
    />,
    <path
      className="app-window-password-correct_svg__a"
      d="M19.934 15.509l-2.905 3.874a.751.751 0 01-1.131.08l-1.5-1.5M10.51 10.504h-6v3.75h3.75"
    />
  );

export default SvgAppWindowPasswordCorrect;
