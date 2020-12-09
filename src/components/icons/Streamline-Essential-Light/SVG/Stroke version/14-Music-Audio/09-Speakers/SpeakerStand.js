import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakerStand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speaker-stand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="speaker-stand_svg__a"
      x={4}
      y={0.5}
      width={16}
      height={16}
      rx={2}
      ry={2}
    />,
    <path
      className="speaker-stand_svg__a"
      d="M12 16.5V20M11.984 20.016L8.016 23.5M11.984 20.016l3.969 3.484"
    />,
    <circle className="speaker-stand_svg__a" cx={12} cy={10} r={4.5} />,
    <circle className="speaker-stand_svg__a" cx={12} cy={10} r={2} />,
    <path
      className="speaker-stand_svg__a"
      d="M7.5 2.751A.25.25 0 117.25 3a.25.25 0 01.25-.25M16.5 2.751a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgSpeakerStand;
