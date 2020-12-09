import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleNeutralCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-neutral-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-neutral-circle_svg__cls-1"
      cx={12}
      cy={12.01}
      r={11.5}
    />,
    <circle
      className="multiple-neutral-circle_svg__cls-1"
      cx={8}
      cy={9.26}
      r={4.25}
    />,
    <path
      className="multiple-neutral-circle_svg__cls-1"
      d="M19.678 16.3a5 5 0 00-5.809 1.894 7 7 0 00-9.664-2.066"
    />,
    <circle
      className="multiple-neutral-circle_svg__cls-1"
      cx={18}
      cy={11.51}
      r={3}
    />
  );

export default SvgMultipleNeutralCircle;
