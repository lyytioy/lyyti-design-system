import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderHetero = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-hetero_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gender-hetero_svg__cls-1"
      d="M12 6.569a6 6 0 11-7.165-.256M8.25 17.25v6M9.634 13.824a6 6 0 118.6-.9M17.743 4.992L21.75.75M18 .75h3.75V4.5M5.25 20.25h6"
    />
  );

export default SvgGenderHetero;
