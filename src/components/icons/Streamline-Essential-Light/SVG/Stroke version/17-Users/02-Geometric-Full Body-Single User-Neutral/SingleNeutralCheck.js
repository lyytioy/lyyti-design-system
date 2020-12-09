import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-check_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-check_svg__cls-1"
      d="M23.5 6.5a6 6 0 11-6-6M23.5 2l-5.47 5.469a.749.749 0 01-1.06 0L15.25 5.75M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="single-neutral-check_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />
  );

export default SvgSingleNeutralCheck;
