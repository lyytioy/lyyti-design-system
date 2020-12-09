import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSkull2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".skull-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="skull-2_svg__a"
      d="M18.75 10.5a6.75 6.75 0 10-10.5 5.613v2.637a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5v-2.637a6.743 6.743 0 003-5.613zM9 10.125"
    />,
    <path
      className="skull-2_svg__a"
      d="M9 10.125a.375.375 0 10.375.375.374.374 0 00-.375-.375M15 10.125a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />,
    <circle className="skull-2_svg__a" cx={3} cy={3} r={2.25} />,
    <circle className="skull-2_svg__a" cx={21} cy={3} r={2.25} />,
    <circle className="skull-2_svg__a" cx={3} cy={21} r={2.25} />,
    <circle className="skull-2_svg__a" cx={21} cy={21} r={2.25} />,
    <path
      className="skull-2_svg__a"
      d="M8.037 15.962l-3.446 3.447M19.411 4.589l-1.947 1.947M15.963 15.963l3.446 3.446M4.59 4.589l1.947 1.947"
    />
  );

export default SvgSkull2;
