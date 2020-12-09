import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralVintageTv = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-vintage-tv_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-vintage-tv_svg__cls-1"
      cx={8.25}
      cy={7.875}
      r={2.625}
    />,
    <path
      className="single-neutral-vintage-tv_svg__cls-1"
      d="M3.75 15.75a4.5 4.5 0 019 0"
    />,
    <rect
      className="single-neutral-vintage-tv_svg__cls-1"
      x={0.75}
      y={2.25}
      width={22.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-neutral-vintage-tv_svg__cls-1"
      d="M15.75 2.25v16.5M18.75 11.25h1.5M18.75 14.25h1.5M19.5 7.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M2.25 21.75l3-3M21.75 21.75l-3-3"
    />
  );

export default SvgSingleNeutralVintageTv;
