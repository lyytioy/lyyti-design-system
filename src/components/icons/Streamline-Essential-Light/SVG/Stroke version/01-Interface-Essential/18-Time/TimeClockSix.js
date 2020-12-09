import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockSix = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-six_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-six_svg__a"
      d="M11.5.5c6.352 0 12 5.148 12 11.5s-5.648 11.5-12 11.5zM21.5 11.998h-2M2.5 11.998h2M18.718 18.719l-1.415-1.415M5.282 5.284l1.414 1.413M5.282 18.719l1.414-1.415M18.718 5.284l-1.415 1.413"
    />
  );

export default SvgTimeClockSix;
