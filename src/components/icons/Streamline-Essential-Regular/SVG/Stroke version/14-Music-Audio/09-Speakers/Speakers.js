import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speakers_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="speakers_svg__a"
      d="M7.39 3.86a.375.375 0 100 .53.374.374 0 000-.53M17.14 3.86a.375.375 0 100 .53.374.374 0 000-.53M17.14 19.61a.375.375 0 100 .53.374.374 0 000-.53M7.39 19.61a.375.375 0 100 .53.374.374 0 000-.53"
    />,
    <rect
      className="speakers_svg__a"
      x={3.75}
      y={0.75}
      width={16.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="speakers_svg__a" cx={12} cy={12} r={5.25} />,
    <circle className="speakers_svg__a" cx={12} cy={12} r={1.5} />
  );

export default SvgSpeakers;
