import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopeUps = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".envelope-ups_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="envelope-ups_svg__a"
      x={2.5}
      y={0.5}
      width={19}
      height={23}
      rx={1}
      ry={1}
    />,
    <circle className="envelope-ups_svg__a" cx={12} cy={10} r={1.5} />,
    <path
      className="envelope-ups_svg__a"
      d="M8.5 3.5h8M8.5 5.5h8M13.5 17a1.5 1.5 0 01-1.5 1.5h-1.5v-3H12a1.5 1.5 0 011.5 1.5zM10.5 20.5v-2M8.5 15.5V19a1.5 1.5 0 01-3 0v-3.5M18.5 15.5h-1.838a1.162 1.162 0 00-.367 2.265l1.41.47a1.162 1.162 0 01-.367 2.265H15.5"
    />
  );

export default SvgEnvelopeUps;
