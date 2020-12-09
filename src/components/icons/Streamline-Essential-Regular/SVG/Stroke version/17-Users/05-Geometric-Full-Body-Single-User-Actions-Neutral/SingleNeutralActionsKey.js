import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-key_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-key_svg__cls-1"
      d="M15.044 18.924a.375.375 0 110 .531.377.377 0 010-.531"
    />,
    <path
      className="single-neutral-actions-key_svg__cls-1"
      d="M19.086 17.709l3.688-3.687a1.624 1.624 0 10-2.3-2.3l-3.684 3.691a4.06 4.06 0 102.3 2.3z"
    />,
    <circle
      className="single-neutral-actions-key_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-actions-key_svg__cls-1"
      d="M11.032 12A5.25 5.25 0 00.75 13.5v2.25H3l.75 7.5h4.5L8.775 18"
    />
  );

export default SvgSingleNeutralActionsKey;
