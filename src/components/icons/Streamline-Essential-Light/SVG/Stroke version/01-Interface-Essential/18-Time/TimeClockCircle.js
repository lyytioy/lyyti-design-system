import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="time-clock-circle_svg__a"
      cx={11.999}
      cy={12.001}
      r={11.5}
    />,
    <path className="time-clock-circle_svg__a" d="M12 6.501v5.5l6 5.5" />
  );

export default SvgTimeClockCircle;
