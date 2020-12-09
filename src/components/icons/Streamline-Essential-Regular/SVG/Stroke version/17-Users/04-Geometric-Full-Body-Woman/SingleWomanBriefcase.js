import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanBriefcase = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-briefcase_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-briefcase_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-briefcase_svg__cls-1"
      d="M10.744 11.249a5.276 5.276 0 00-1.858-2.135L6 13.5 3.114 9.114A5.246 5.246 0 00.75 13.5v2.25H3l.75 7.5h4.5l.281-2.81M3 3.75S3 7.5.75 7.5M9 3.75S9 7.5 11.25 7.5"
    />,
    <rect
      className="single-woman-briefcase_svg__cls-1"
      x={11.25}
      y={14.25}
      width={12}
      height={9}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="single-woman-briefcase_svg__cls-1"
      d="M11.25 17.25h12M17.25 17.25v1.5M18 11.25h-1.5a1.5 1.5 0 00-1.5 1.5v1.5h4.5v-1.5a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgSingleWomanBriefcase;
