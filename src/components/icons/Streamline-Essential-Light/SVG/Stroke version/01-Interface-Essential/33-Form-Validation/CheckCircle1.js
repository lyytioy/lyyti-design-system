import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="check-circle-1_svg__a" d="M18 6.999l-7 9.5-5-4" />,
    <circle className="check-circle-1_svg__a" cx={12} cy={11.999} r={11.5} />
  );

export default SvgCheckCircle1;
