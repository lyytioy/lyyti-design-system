import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-star_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-star_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />,
    <path
      className="single-neutral-actions-star_svg__cls-1"
      d="M9.5 17.5h-9a7 7 0 0112-4.9M18.206 11.93l1.539 3.323h2.995a.735.735 0 01.517 1.283l-2.6 2.563 1.44 3.313a.785.785 0 01-1.117.982l-3.48-1.961-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.563a.734.734 0 01.514-1.283h3l1.541-3.323a.8.8 0 011.408 0z"
    />
  );

export default SvgSingleNeutralActionsStar;
