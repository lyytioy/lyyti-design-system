import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalLow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-low_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="signal-low_svg__a"
      x={0.5}
      y={10.5}
      width={3}
      height={6}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="signal-low_svg__a"
      x={5.5}
      y={7.5}
      width={3}
      height={9}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="signal-low_svg__a"
      d="M10.5 16.5h3M15.5 16.5h3M20.5 16.5h3"
    />
  );

export default SvgSignalLow;
