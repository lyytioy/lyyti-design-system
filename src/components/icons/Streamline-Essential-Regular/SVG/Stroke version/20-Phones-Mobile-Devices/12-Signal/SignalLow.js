import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalLow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-low_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="signal-low_svg__a"
      x={0.75}
      y={11.25}
      width={4.5}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path className="signal-low_svg__a" d="M18.75 17.25h4.5M9.75 17.25h4.5" />
  );

export default SvgSignalLow;
