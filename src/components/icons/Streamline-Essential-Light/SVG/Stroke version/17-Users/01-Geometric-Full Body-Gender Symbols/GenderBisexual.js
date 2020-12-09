import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderBisexual = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-bisexual_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gender-bisexual_svg__cls-1"
      d="M12.5 23.5H14l1-5h3.5C16.983 12.969 17 9 12.532 9.009M10.389 5a1.484 1.484 0 002.222 0M10.5 9.05A4.984 4.984 0 006 14v4.5h2.5v5h2M10.5.55a3.484 3.484 0 000 6.9M12.5.55a3.484 3.484 0 010 6.9M5.5.5h-3a2 2 0 00-2 2v19a2 2 0 002 2h3M18.5 23.5h3a2 2 0 002-2v-19a2 2 0 00-2-2h-3"
    />
  );

export default SvgGenderBisexual;
