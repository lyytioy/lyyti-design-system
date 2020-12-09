import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManBriefcase = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-briefcase_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-briefcase_svg__cls-1"
      d="M5.5 11v3M10.324 12.681A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1M2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-briefcase_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <g id="single-man-briefcase_svg__New_Symbol_41" data-name="New Symbol 41">
      <g id="single-man-briefcase_svg__New_Symbol_2" data-name="New Symbol 2">
        <rect
          className="single-man-briefcase_svg__cls-1"
          x={11.5}
          y={14.5}
          width={12}
          height={9}
          rx={1}
          ry={1}
        />
        <path
          className="single-man-briefcase_svg__cls-1"
          d="M11.5 18.5h12M17.5 18.5V20M18.382 12.5a1 1 0 01.894.553L20 14.5h-5l.724-1.447a1 1 0 01.894-.553z"
        />
      </g>
    </g>
  );

export default SvgSingleManBriefcase;
