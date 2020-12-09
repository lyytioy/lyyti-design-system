import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopeBackFront = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".envelope-back-front_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="envelope-back-front_svg__a"
      d="M3.75 12.75h-1.5a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v6"
    />,
    <path
      className="envelope-back-front_svg__a"
      d="M.75 2.25L9 6.75l8.25-4.5"
    />,
    <rect
      className="envelope-back-front_svg__a"
      x={6.75}
      y={11.25}
      width={16.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="envelope-back-front_svg__a"
      d="M6.75 12.75l3.75 3h9l3.75-3"
    />
  );

export default SvgEnvelopeBackFront;
