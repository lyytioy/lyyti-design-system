import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonPrevious = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-previous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-previous_svg__a"
      d="M7.988 15.658a.855.855 0 01-1.238-.765V9.1a.855.855 0 011.238-.765l5.789 2.894a.856.856 0 010 1.531z"
    />,
    <circle className="button-previous_svg__a" cx={12} cy={11.998} r={11.25} />,
    <path className="button-previous_svg__a" d="M17.25 8.248v7.5" />
  );

export default SvgButtonPrevious;
