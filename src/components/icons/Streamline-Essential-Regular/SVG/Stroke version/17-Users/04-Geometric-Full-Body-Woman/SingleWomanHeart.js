import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-heart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-heart_svg__cls-1"
      d="M17.25 11.25l-5.114-5.335a3.023 3.023 0 01-.566-3.492 3.025 3.025 0 014.845-.787l.835.835.835-.835a3.026 3.026 0 014.846.787 3.025 3.025 0 01-.567 3.492z"
    />,
    <circle
      className="single-woman-heart_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-heart_svg__cls-1"
      d="M8.034 9.216L5.25 12.75 2.466 9.216A4.489 4.489 0 00.75 12.75v3h1.5l.75 7.5h4.5l.75-7.5h1.5v-3a4.489 4.489 0 00-1.716-3.534zM2.25 3.75s0 3-1.5 3M8.25 3.75s0 3 1.5 3"
    />
  );

export default SvgSingleWomanHeart;
