import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScrollHorizontal1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scroll-horizontal-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="scroll-horizontal-1_svg__a" cx={12} cy={11.998} r={2} />,
    <path
      className="scroll-horizontal-1_svg__a"
      d="M17.5 16.5a.5.5 0 00.838.369l5-4.5a.5.5 0 000-.738l-5-4.5a.5.5 0 00-.838.369zM6.5 16.5a.5.5 0 01-.838.369l-5-4.5a.5.5 0 010-.738l5-4.5A.5.5 0 016.5 7.5z"
    />
  );

export default SvgScrollHorizontal1;
