import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralRotate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-rotate_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-rotate_svg__cls-1"
      cx={12}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="single-neutral-rotate_svg__cls-1"
      d="M15.75 12.75V10.5a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 6h3l.75-6zM3.75 23.25l3.351-1.949L6 17.25M12 21.75c6.213 0 11.25-2.015 11.25-4.5 0-1.471-1.772-2.773-4.5-3.594"
    />,
    <path
      className="single-neutral-rotate_svg__cls-1"
      d="M5.25 13.656c-2.728.821-4.5 2.123-4.5 3.594 0 1.781 2.6 3.317 6.35 4.046"
    />
  );

export default SvgSingleNeutralRotate;
