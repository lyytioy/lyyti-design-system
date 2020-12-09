import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyCrying = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-crying_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-crying_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-crying_svg__a"
      d="M18.048 18a6.752 6.752 0 00-12.1 0M9.75 6.834a3.689 3.689 0 00-4.018 1.934M14.25 6.834a3.689 3.689 0 014.018 1.934M5.25 12.518v.75M18.75 12.518v.75"
    />
  );

export default SvgSmileyCrying;
