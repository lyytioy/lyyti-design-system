import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeaker = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speaker_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="speaker_svg__a"
      d="M5.14 3.86a.375.375 0 100 .53.374.374 0 000-.53M19.39 3.86a.375.375 0 100 .53.374.374 0 000-.53M19.39 19.61a.375.375 0 100 .53.374.374 0 000-.53M5.14 19.61a.375.375 0 100 .53.374.374 0 000-.53"
    />,
    <rect
      className="speaker_svg__a"
      x={1.5}
      y={0.75}
      width={21}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="speaker_svg__a" cx={12} cy={12} r={6.75} />,
    <circle className="speaker_svg__a" cx={12} cy={12} r={2.25} />
  );

export default SvgSpeaker;
