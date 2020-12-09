import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonNext = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-next_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-next_svg__a"
      d="M16.012 15.658a.855.855 0 001.238-.765V9.1a.855.855 0 00-1.238-.765l-5.789 2.894a.856.856 0 000 1.531z"
    />,
    <circle className="button-next_svg__a" cx={12} cy={11.998} r={11.25} />,
    <path className="button-next_svg__a" d="M6.75 8.248v7.5" />
  );

export default SvgButtonNext;
