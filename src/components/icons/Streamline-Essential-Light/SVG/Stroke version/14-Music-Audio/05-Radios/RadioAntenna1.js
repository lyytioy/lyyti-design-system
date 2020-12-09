import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioAntenna1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radio-antenna-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="radio-antenna-1_svg__a"
      x={0.5}
      y={8.5}
      width={23}
      height={15}
      rx={3}
      ry={3}
    />,
    <circle
      className="radio-antenna-1_svg__a"
      cx={7.996}
      cy={15.996}
      r={5.496}
    />,
    <path
      className="radio-antenna-1_svg__a"
      d="M8 15.746a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.385 12.943h1.221M8.606 19.049H7.385M5.046 14.998l.611-1.058M10.945 16.993l-.611 1.058M5.657 18.051l-.611-1.058M10.334 13.94l.611 1.058M20.5 8.5L.5.5M20.5 20.491h-4M20.5 18.491h-4M20.5 16.491h-4"
    />,
    <circle className="radio-antenna-1_svg__a" cx={18.5} cy={12.491} r={1.5} />
  );

export default SvgRadioAntenna1;
