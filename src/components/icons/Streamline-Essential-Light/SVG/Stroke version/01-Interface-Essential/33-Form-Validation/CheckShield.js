import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="check-shield_svg__a" d="M17.501 6.999l-7.5 7-2.5-2.5" />,
    <path
      className="check-shield_svg__a"
      d="M2.5 1.5a1 1 0 011-1h17a1 1 0 011 1v6.263A17.783 17.783 0 0112 23.5 17.777 17.777 0 012.5 7.763z"
    />
  );

export default SvgCheckShield;
