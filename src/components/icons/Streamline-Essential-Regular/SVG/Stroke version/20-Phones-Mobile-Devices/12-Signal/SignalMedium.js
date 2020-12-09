import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalMedium = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-medium_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="signal-medium_svg__a"
      x={9.75}
      y={8.25}
      width={4.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="signal-medium_svg__a"
      x={0.75}
      y={14.25}
      width={4.5}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path className="signal-medium_svg__a" d="M18.75 20.25h4.5" />
  );

export default SvgSignalMedium;
