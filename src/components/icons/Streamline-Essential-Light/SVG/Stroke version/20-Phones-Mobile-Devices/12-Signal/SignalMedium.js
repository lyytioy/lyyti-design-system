import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalMedium = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-medium_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="signal-medium_svg__a"
      x={0.5}
      y={12}
      width={3}
      height={6}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="signal-medium_svg__a"
      x={5.5}
      y={9}
      width={3}
      height={9}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="signal-medium_svg__a"
      x={10.5}
      y={6}
      width={3}
      height={12}
      rx={0.5}
      ry={0.5}
    />,
    <path className="signal-medium_svg__a" d="M15.5 18h3M20.5 18h3" />
  );

export default SvgSignalMedium;
