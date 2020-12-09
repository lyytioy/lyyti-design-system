import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutral = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="single-neutral_svg__cls-1" cx={12} cy={6.75} r={5.5} />,
    <path className="single-neutral_svg__cls-1" d="M3 22.75a9 9 0 0118 0z" />
  );

export default SvgSingleNeutral;
