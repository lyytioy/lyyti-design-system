import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="time-clock-circle-1_svg__a"
      cx={12}
      cy={12.001}
      r={11.5}
    />,
    <path className="time-clock-circle-1_svg__a" d="M18 18.001l-4.943-4.942" />,
    <circle
      className="time-clock-circle-1_svg__a"
      cx={12}
      cy={12.001}
      r={1.5}
    />,
    <path className="time-clock-circle-1_svg__a" d="M12 6.501v4" />
  );

export default SvgTimeClockCircle1;
