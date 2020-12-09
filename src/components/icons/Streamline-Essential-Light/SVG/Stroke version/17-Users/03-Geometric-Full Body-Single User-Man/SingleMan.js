import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man_svg__cls-1"
      d="M12 11v3M14 23.5l.5-6H17V14a5 5 0 00-10 0v3.5h2.5l.5 6zM8.984 2.223A5.809 5.809 0 0013.167 4a5.822 5.822 0 002.3-.473"
    />,
    <circle className="single-man_svg__cls-1" cx={12} cy={4} r={3.5} />
  );

export default SvgSingleMan;
