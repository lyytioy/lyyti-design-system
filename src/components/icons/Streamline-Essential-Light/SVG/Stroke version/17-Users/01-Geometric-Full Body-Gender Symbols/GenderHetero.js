import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderHetero = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-hetero_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gender-hetero_svg__cls-1"
      d="M9.5 14.244a5.5 5.5 0 114 1.233M10.512 7.768A5.5 5.5 0 116.5 6.522M17 6L22.5.5M22.5 4.5v-4h-4M6.5 17.5v6M4.5 21.5h4"
    />
  );

export default SvgGenderHetero;
