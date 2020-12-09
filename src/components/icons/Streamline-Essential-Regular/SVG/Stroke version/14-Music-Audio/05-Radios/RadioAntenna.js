import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioAntenna = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radio-antenna_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="radio-antenna_svg__a"
      d="M3.727 7.5L21 .75M.75 13.5h22.5M4.124 9.75a.375.375 0 11-.374.376.375.375 0 01.374-.376M19.874 9.75a.375.375 0 11-.374.376.375.375 0 01.374-.376M15 10.5h1.5M7.5 10.5H12"
    />,
    <circle className="radio-antenna_svg__a" cx={6} cy={18} r={2.25} />,
    <path className="radio-antenna_svg__a" d="M12.75 16.5H18M12.75 19.5H18" />,
    <rect
      className="radio-antenna_svg__a"
      x={0.75}
      y={7.5}
      width={22.5}
      height={15.75}
      rx={1}
      ry={1}
    />
  );

export default SvgRadioAntenna;
