import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-expand_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-expand_svg__cls-1"
      d="M.5 23.5L6 18M.5 18.484V23.5l5-.016"
    />,
    <circle
      className="single-neutral-expand_svg__cls-1"
      cx={12.008}
      cy={6.25}
      r={2.75}
    />,
    <path
      className="single-neutral-expand_svg__cls-1"
      d="M15.508 13.5a3.5 3.5 0 00-7 0v3h1.583l.417 5h3l.416-5h1.584zM.5.5L6 6M.5 5.516V.5l5 .016M23.5 23.5L18 18M23.5 18.484V23.5l-5-.016M23.5.5L18 6M23.5 5.516V.5l-5 .016"
    />
  );

export default SvgSingleNeutralExpand;
