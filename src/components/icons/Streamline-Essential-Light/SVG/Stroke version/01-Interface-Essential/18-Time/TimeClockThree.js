import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockThree = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-three_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-three_svg__a"
      d="M11.525.5v12H23.5c.273-6.324-4.506-12-11.975-12zM12.025 19.501v2M4.525 12.001h-2M6.722 6.697L5.308 5.283M17.329 6.697l1.414-1.414M17.329 17.304l1.414 1.414M6.722 17.304l-1.414 1.414"
    />
  );

export default SvgTimeClockThree;
