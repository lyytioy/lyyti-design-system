import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelope = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".envelope_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="envelope_svg__a"
      x={0.5}
      y={4.5}
      width={23}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="envelope_svg__a"
      d="M20.5 8.5L12 14 3.5 8.5M3.5 16L7 14M20.5 16L17 14"
    />
  );

export default SvgEnvelope;
