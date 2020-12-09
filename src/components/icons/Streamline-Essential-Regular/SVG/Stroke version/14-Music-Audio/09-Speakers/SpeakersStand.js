import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakersStand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speakers-stand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="speakers-stand_svg__a" cx={6} cy={12.75} r={2.25} />,
    <circle className="speakers-stand_svg__a" cx={6} cy={6} r={1.5} />,
    <rect
      className="speakers-stand_svg__a"
      x={0.75}
      y={0.75}
      width={10.5}
      height={17.25}
      rx={2}
      ry={2}
    />,
    <path className="speakers-stand_svg__a" d="M6 18v5.25M3.75 23.25h4.5" />,
    <circle className="speakers-stand_svg__a" cx={18} cy={12.75} r={2.25} />,
    <circle className="speakers-stand_svg__a" cx={18} cy={6} r={1.5} />,
    <path
      className="speakers-stand_svg__a"
      d="M13.629 1.629A2.991 2.991 0 0115.75.75h4.5a3 3 0 013 3V15a3 3 0 01-3 3h-4.5a2.991 2.991 0 01-2.121-.879M18 18v5.25M15.75 23.25h4.5"
    />
  );

export default SvgSpeakersStand;
