import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalVeryLow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-very-low_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="signal-very-low_svg__a"
      x={0.5}
      y={9}
      width={3}
      height={6}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="signal-very-low_svg__a"
      d="M5.5 15h3M10.5 15h3M15.5 15h3M20.5 15h3"
    />
  );

export default SvgSignalVeryLow;
