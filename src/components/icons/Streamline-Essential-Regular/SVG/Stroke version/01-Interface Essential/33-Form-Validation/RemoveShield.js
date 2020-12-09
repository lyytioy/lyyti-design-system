import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="remove-shield_svg__a"
      d="M7.5 14.999l9-9M7.5 5.999l9 9M3 .749a1.5 1.5 0 00-1.5 1.5v9c0 4.813 7.234 10.169 9.693 11.76a1.477 1.477 0 001.614 0c2.459-1.591 9.693-6.947 9.693-11.76v-9a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgRemoveShield;
