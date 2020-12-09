import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-refresh_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-refresh_svg__cls-1"
      d="M15 18.5h-3.5V22M22.917 19.733A5.572 5.572 0 0112.1 18.5M20 16.5h3.5V13M12.083 15.267A5.572 5.572 0 0122.9 16.5"
    />,
    <circle
      className="single-neutral-actions-refresh_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />,
    <path
      className="single-neutral-actions-refresh_svg__cls-1"
      d="M8.5 17.5h-8a7 7 0 0110.783-5.89"
    />
  );

export default SvgSingleNeutralActionsRefresh;
