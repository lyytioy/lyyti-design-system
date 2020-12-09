import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakersStand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speakers-stand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="speakers-stand_svg__a"
      x={0.5}
      y={0.5}
      width={10}
      height={18}
      rx={2}
      ry={2}
    />,
    <circle className="speakers-stand_svg__a" cx={5.5} cy={5} r={1.5} />,
    <circle className="speakers-stand_svg__a" cx={5.5} cy={12.5} r={3} />,
    <path className="speakers-stand_svg__a" d="M5.5 18.5v5M2.5 23.5h6" />,
    <rect
      className="speakers-stand_svg__a"
      x={13.5}
      y={0.5}
      width={10}
      height={18}
      rx={2}
      ry={2}
    />,
    <circle className="speakers-stand_svg__a" cx={18.5} cy={5} r={1.5} />,
    <circle className="speakers-stand_svg__a" cx={18.5} cy={12.5} r={3} />,
    <path className="speakers-stand_svg__a" d="M18.5 18.5v5M15.5 23.5h6" />
  );

export default SvgSpeakersStand;
