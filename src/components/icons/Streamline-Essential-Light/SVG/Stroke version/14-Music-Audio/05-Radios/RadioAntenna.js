import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioAntenna = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radio-antenna_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="radio-antenna_svg__a"
      x={0.5}
      y={8.5}
      width={23}
      height={14}
      rx={2}
      ry={2}
    />,
    <rect
      className="radio-antenna_svg__a"
      x={2.5}
      y={10.5}
      width={19}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="radio-antenna_svg__a" cx={4.5} cy={19.5} r={1} />,
    <circle className="radio-antenna_svg__a" cx={19.5} cy={19.5} r={1} />,
    <path
      className="radio-antenna_svg__a"
      d="M16.5 19.5a1 1 0 01-1 1h-7a1 1 0 010-2h7a1 1 0 011 1zM2.5 12.5h19M2.5 14.5h19M13.5 18.5v2M2.5 8.5l16-8M5.5 22.5v1M18.5 22.5v1"
    />
  );

export default SvgRadioAntenna;
