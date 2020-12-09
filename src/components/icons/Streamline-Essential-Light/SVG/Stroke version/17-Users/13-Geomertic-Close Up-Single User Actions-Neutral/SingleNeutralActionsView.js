import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsView = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-view_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-view_svg__cls-1"
      cx={17.029}
      cy={17.029}
      r={4.529}
    />,
    <path
      className="single-neutral-actions-view_svg__cls-1"
      d="M23.5 23.5l-3.248-3.248"
    />,
    <circle
      className="single-neutral-actions-view_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />,
    <path
      className="single-neutral-actions-view_svg__cls-1"
      d="M9.5 17.5h-9a7 7 0 0110.783-5.89"
    />
  );

export default SvgSingleNeutralActionsView;
