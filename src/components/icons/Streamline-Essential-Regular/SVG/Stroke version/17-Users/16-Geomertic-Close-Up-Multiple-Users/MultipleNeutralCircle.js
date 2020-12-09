import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleNeutralCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-neutral-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-neutral-circle_svg__cls-1"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <circle
      className="multiple-neutral-circle_svg__cls-1"
      cx={9}
      cy={10.875}
      r={4.125}
    />,
    <path
      className="multiple-neutral-circle_svg__cls-1"
      d="M6 17.2a6.756 6.756 0 019.049 3.048"
    />,
    <circle
      className="multiple-neutral-circle_svg__cls-1"
      cx={17.812}
      cy={12.562}
      r={2.813}
    />
  );

export default SvgMultipleNeutralCircle;
