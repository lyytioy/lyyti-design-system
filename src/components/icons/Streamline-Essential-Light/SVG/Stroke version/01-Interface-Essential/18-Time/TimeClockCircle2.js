import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockCircle2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-circle-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-circle-2_svg__a"
      d="M15.502 12.001h-3.5v-5.5"
    />,
    <rect
      className="time-clock-circle-2_svg__a"
      x={0.5}
      y={0.501}
      width={23}
      height={23}
      rx={4}
      ry={4}
    />,
    <circle
      className="time-clock-circle-2_svg__a"
      cx={12}
      cy={12.001}
      r={8.5}
    />
  );

export default SvgTimeClockCircle2;
