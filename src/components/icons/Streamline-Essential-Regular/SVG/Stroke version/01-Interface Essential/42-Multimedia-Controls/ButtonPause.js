import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonPause = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-pause_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-pause_svg__a"
      d="M9.75 8.248v7.5M14.805 8.248v7.5"
    />,
    <circle className="button-pause_svg__a" cx={12} cy={11.998} r={11.25} />
  );

export default SvgButtonPause;
