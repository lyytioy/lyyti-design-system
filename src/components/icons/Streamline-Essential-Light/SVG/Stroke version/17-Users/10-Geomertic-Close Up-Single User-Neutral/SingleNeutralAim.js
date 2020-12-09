import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralAim = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-aim_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-aim_svg__cls-1"
      d="M21 12a9 9 0 11-9-9 9 9 0 019 9zM12 1v3.5M1 12h3.5M12 23v-3.5M23 12h-3.5"
    />,
    <circle
      className="single-neutral-aim_svg__cls-1"
      cx={12}
      cy={10.25}
      r={2.25}
    />,
    <path
      className="single-neutral-aim_svg__cls-1"
      d="M16.5 17a4.644 4.644 0 00-9 0z"
    />
  );

export default SvgSingleNeutralAim;
