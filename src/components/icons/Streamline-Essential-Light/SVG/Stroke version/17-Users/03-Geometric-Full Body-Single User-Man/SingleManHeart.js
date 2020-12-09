import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-heart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-heart_svg__cls-1"
      d="M17.861 10.623a.5.5 0 01-.722 0l-4.753-4.958a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.025 3.025 0 01-.567 3.492zM5.5 11v3M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6zM2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle className="single-man-heart_svg__cls-1" cx={5.5} cy={4} r={3.5} />
  );

export default SvgSingleManHeart;
