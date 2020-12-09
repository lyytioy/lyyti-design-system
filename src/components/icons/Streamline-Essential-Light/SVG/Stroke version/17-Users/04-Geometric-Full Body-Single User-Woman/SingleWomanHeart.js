import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-heart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-heart_svg__cls-1"
      d="M17.861 10.623a.5.5 0 01-.722 0l-4.753-4.958a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.025 3.025 0 01-.567 3.492z"
    />,
    <circle className="single-woman-heart_svg__cls-1" cx={6} cy={4} r={3.5} />,
    <path
      className="single-woman-heart_svg__cls-1"
      d="M2.547 4.577A4.633 4.633 0 006 2.974a4.632 4.632 0 003.452 1.6M8.217 9.715L6 13.206 3.802 9.701"
    />,
    <path
      className="single-woman-heart_svg__cls-1"
      d="M6 9a3.8 3.8 0 013.7 2.918l1.8 6.582H8.543l-1.054 5h-3l-1.054-5H.5l1.805-6.582A3.8 3.8 0 016 9z"
    />
  );

export default SvgSingleWomanHeart;
