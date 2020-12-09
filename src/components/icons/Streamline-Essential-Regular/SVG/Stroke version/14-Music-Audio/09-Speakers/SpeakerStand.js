import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakerStand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speaker-stand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="speaker-stand_svg__a"
      x={3}
      y={0.75}
      width={18}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="speaker-stand_svg__a" cx={12} cy={9.75} r={4.5} />,
    <circle className="speaker-stand_svg__a" cx={12} cy={9.75} r={1.5} />,
    <path
      className="speaker-stand_svg__a"
      d="M9.75 23.25l2.25-3M14.25 23.25l-2.25-3M12 20.25v-3M6 3.75h.75M17.25 3.75H18"
    />
  );

export default SvgSpeakerStand;
