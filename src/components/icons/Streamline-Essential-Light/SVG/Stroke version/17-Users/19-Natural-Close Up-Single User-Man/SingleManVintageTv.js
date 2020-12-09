import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManVintageTv = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-vintage-tv_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-vintage-tv_svg__cls-1"
      d="M17.5 18.5v-16M19.5 15.5h2M19.5 13.5h2M19.5 11.5h2"
    />,
    <circle
      className="single-man-vintage-tv_svg__cls-1"
      cx={20.5}
      cy={7.5}
      r={1}
    />,
    <path
      className="single-man-vintage-tv_svg__cls-1"
      d="M5 18.5l-2.5 3M19 18.5l2.5 3"
    />,
    <rect
      className="single-man-vintage-tv_svg__cls-1"
      x={0.5}
      y={2.5}
      width={23}
      height={16}
      rx={1}
      ry={1}
    />,
    <path
      className="single-man-vintage-tv_svg__cls-1"
      d="M14.5 16L11 14.5v-2s.866-.35.866-2.5c.684 0 .944-2-.007-2a2.63 2.63 0 00.44-2c-.491-2-5.331-2-5.822 0-2.066-.43-.422 1.712-.422 2-.981 0-.981 2 0 2 0 2.15.945 2.5.945 2.5v2L3.5 16"
    />
  );

export default SvgSingleManVintageTv;
