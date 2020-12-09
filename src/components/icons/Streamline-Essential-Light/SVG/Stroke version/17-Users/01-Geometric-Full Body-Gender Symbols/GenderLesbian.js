import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderLesbian = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-lesbian_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gender-lesbian_svg__cls-1"
      d="M9.5 14.244a5.5 5.5 0 114 1.233M10.512 7.768A5.5 5.5 0 116.5 6.522M16.889 6.111L22.5.5M6.5 17.477V23.5M4.5 21.5h4M18.5.5l4 4"
    />
  );

export default SvgGenderLesbian;
