import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderGay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-gay_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gender-gay_svg__cls-1"
      d="M9.5 14.244a5.5 5.5 0 114 1.233M10.512 7.768A5.5 5.5 0 116.5 6.522M16.889 6.111L22.5.5M22.5 4.5v-4h-4M6.5 17.477V23.5M9.5 20.5l-3 3-3-3"
    />
  );

export default SvgGenderGay;
