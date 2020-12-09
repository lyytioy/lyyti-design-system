import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="time-clock-circle-1_svg__a" cx={12} cy={12} r={10.5} />,
    <circle className="time-clock-circle-1_svg__a" cx={12} cy={12} r={1.5} />,
    <path
      className="time-clock-circle-1_svg__a"
      d="M12 10.5V5.25M13.061 13.061l2.689 2.689"
    />
  );

export default SvgTimeClockCircle1;
