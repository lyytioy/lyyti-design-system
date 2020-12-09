import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockCircle2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-circle-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="time-clock-circle-2_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="time-clock-circle-2_svg__a" cx={12} cy={12} r={7.5} />,
    <path className="time-clock-circle-2_svg__a" d="M12 12V7.5M12 12h4.5" />
  );

export default SvgTimeClockCircle2;
