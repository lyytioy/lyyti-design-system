import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioAntenna1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radio-antenna-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="radio-antenna-1_svg__a" d="M20.273 6.742L3 .75" />,
    <rect
      className="radio-antenna-1_svg__a"
      x={0.75}
      y={6.742}
      width={22.5}
      height={16.508}
      rx={1}
      ry={1}
      transform="rotate(-180 12 14.996)"
    />,
    <path
      className="radio-antenna-1_svg__a"
      d="M11.887 17.634A4.469 4.469 0 0110.292 19M6.86 19.271a4.658 4.658 0 01-1.792-1.1M3.75 14.992a4.587 4.587 0 01.493-2.042M6.86 10.713a4.526 4.526 0 012.093-.161M11.887 12.35a4.363 4.363 0 01.8 1.939"
    />,
    <circle className="radio-antenna-1_svg__a" cx={18} cy={11.992} r={2.25} />,
    <path className="radio-antenna-1_svg__a" d="M16.5 17.242h3M16.5 20.242h3" />
  );

export default SvgRadioAntenna1;
