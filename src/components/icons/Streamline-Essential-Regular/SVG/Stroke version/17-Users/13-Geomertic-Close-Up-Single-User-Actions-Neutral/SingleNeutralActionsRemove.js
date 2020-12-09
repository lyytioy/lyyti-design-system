import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-remove_svg__cls-1,.single-neutral-actions-remove_svg__cls-2{fill:none;stroke:#bc0011;stroke-linecap:round;stroke-linejoin:round}.single-neutral-actions-remove_svg__cls-2{stroke:#888}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-remove_svg__cls-2"
      d="M.75 17.251a6.753 6.753 0 019.4-6.208"
    />,
    <circle
      className="single-neutral-actions-remove_svg__cls-2"
      cx={7.5}
      cy={4.876}
      r={4.125}
    />,
    <circle
      className="single-neutral-actions-remove_svg__cls-1"
      cx={17.25}
      cy={17.249}
      r={6}
      strokeWidth={1.8}
    />,
    <path
      className="single-neutral-actions-remove_svg__cls-1"
      strokeWidth={1.8}
      d="M19.5 14.998l-4.5 4.5M15 14.998l4.5 4.5"
    />
  );

export default SvgSingleNeutralActionsRemove;
