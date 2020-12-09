import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="remove-shield_svg__a"
      d="M2.5 1.5a1 1 0 011-1h17a1 1 0 011 1v6.264A17.783 17.783 0 0112 23.5 17.779 17.779 0 012.5 7.764zM8 5.998l8 8M16 5.998l-8 8"
    />
  );

export default SvgRemoveShield;
