import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="check-shield_svg__a"
      d="M6.75 11.053l2.45 3.481a1.05 1.05 0 001.707.051l7.843-9.927"
    />,
    <path
      className="check-shield_svg__a"
      d="M3 .749a1.5 1.5 0 00-1.5 1.5v9c0 4.813 7.234 10.169 9.693 11.76a1.477 1.477 0 001.614 0c2.459-1.591 9.693-6.947 9.693-11.76v-9a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgCheckShield;
