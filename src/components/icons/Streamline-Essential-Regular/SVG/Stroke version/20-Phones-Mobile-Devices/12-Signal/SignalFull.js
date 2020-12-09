import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-full_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="signal-full_svg__a"
      x={18.75}
      y={5.25}
      width={4.5}
      height={18}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="signal-full_svg__a"
      x={9.75}
      y={11.25}
      width={4.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="signal-full_svg__a"
      x={0.75}
      y={17.25}
      width={4.5}
      height={6}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgSignalFull;
