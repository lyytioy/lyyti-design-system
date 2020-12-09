import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-shield_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-shield_svg__cls-1"
      d="M13.068 23.3l1.06-.4A13 13 0 0022.5 10.751v-6.5a2 2 0 00-1.2-1.835 23.536 23.536 0 00-18.594 0A2 2 0 001.5 4.249v6.5A13 13 0 009.872 22.9l1.06.4a2.99 2.99 0 002.136 0z"
    />,
    <path
      className="single-man-shield_svg__cls-1"
      d="M17.5 16L14 14.5v-2s.866-.35.866-2.5c.684 0 .944-2-.007-2a2.63 2.63 0 00.44-2c-.491-2-5.331-2-5.822 0-2.066-.43-.422 1.712-.422 2-.981 0-.981 2 0 2 0 2.15.945 2.5.945 2.5v2L6.5 16"
    />
  );

export default SvgSingleManShield;
