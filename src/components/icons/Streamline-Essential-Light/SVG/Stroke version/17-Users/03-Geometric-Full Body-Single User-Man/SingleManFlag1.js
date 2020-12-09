import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManFlag1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-flag-1_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-flag-1_svg__cls-1"
      d="M.5 2.5v21M8.932 10.5H.5v-6h8.432a.5.5 0 01.385.82L7.5 7.5l1.817 2.18a.5.5 0 01-.385.82zM18.5 11v3M20.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H16l.5 6zM15.484 2.223A5.809 5.809 0 0019.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle className="single-man-flag-1_svg__cls-1" cx={18.5} cy={4} r={3.5} />
  );

export default SvgSingleManFlag1;
