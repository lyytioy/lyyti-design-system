import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-remove_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-remove_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="single-neutral-actions-remove_svg__cls-1"
      d="M19.621 15.379l-4.242 4.242M19.621 19.621l-4.242-4.242"
    />,
    <circle
      className="single-neutral-actions-remove_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />,
    <path
      className="single-neutral-actions-remove_svg__cls-1"
      d="M8.5 17.5h-8a7 7 0 0110.783-5.89"
    />
  );

export default SvgSingleNeutralActionsRemove;
