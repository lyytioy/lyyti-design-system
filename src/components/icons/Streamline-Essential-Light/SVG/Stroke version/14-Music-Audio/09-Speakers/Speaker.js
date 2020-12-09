import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeaker = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speaker_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="speaker_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={4}
      ry={4}
    />,
    <circle className="speaker_svg__a" cx={12} cy={12} r={2} />,
    <circle className="speaker_svg__a" cx={12} cy={12} r={6.5} />,
    <circle className="speaker_svg__a" cx={12} cy={12} r={9} />,
    <path
      className="speaker_svg__a"
      d="M3.5 3.751A.25.25 0 113.25 4a.25.25 0 01.25-.25M20.5 3.751a.25.25 0 11-.25.25.25.25 0 01.25-.25M3.5 20.251a.25.25 0 11-.25.25.25.25 0 01.25-.25M20.5 20.251a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgSpeaker;
