import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralRotate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-rotate_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-rotate_svg__cls-1"
      d="M9.955 21.4C4.58 21.065.5 19.431.5 17.464c0-1.443 2.2-2.709 5.492-3.412M18.048 14.062c3.272.705 5.452 1.964 5.452 3.4 0 2.092-4.616 3.808-10.5 3.984"
    />,
    <path
      className="single-neutral-rotate_svg__cls-1"
      d="M7.516 18.142l2.439 3.259L6.5 23.448"
    />,
    <circle
      className="single-neutral-rotate_svg__cls-1"
      cx={12}
      cy={3.302}
      r={2.75}
    />,
    <path
      className="single-neutral-rotate_svg__cls-1"
      d="M15.5 10.552a3.5 3.5 0 00-7 0v3h1.583l.417 5h3l.417-5H15.5z"
    />
  );

export default SvgSingleNeutralRotate;
