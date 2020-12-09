import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralBriefcase = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-briefcase_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="single-neutral-briefcase_svg__cls-1"
      x={11.25}
      y={14.25}
      width={12}
      height={9}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="single-neutral-briefcase_svg__cls-1"
      d="M11.25 17.25h12M17.25 17.25v1.5M18 11.25h-1.5a1.5 1.5 0 00-1.5 1.5v1.5h4.5v-1.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle
      className="single-neutral-briefcase_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-briefcase_svg__cls-1"
      d="M9.19 10.575A4.5 4.5 0 00.75 12.75v3h1.5l.75 7.5h4.5l.51-5.1"
    />
  );

export default SvgSingleNeutralBriefcase;
