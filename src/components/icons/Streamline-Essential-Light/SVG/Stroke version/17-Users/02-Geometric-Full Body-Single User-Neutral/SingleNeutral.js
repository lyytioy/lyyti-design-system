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
    <path
      className="single-neutral_svg__cls-1"
      d="M14 23.5l.5-6H17V14a5 5 0 00-10 0v3.5h2.5l.5 6z"
    />,
    <circle className="single-neutral_svg__cls-1" cx={12} cy={4} r={3.5} />
  );

export default SvgSingleNeutral;
