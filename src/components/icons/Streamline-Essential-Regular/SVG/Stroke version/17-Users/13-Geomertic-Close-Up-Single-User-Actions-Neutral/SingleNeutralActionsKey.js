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
    <circle
      className="single-neutral-actions-key_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-neutral-actions-key_svg__cls-1"
      d="M12.21 12.426A6.742 6.742 0 00.75 17.25M15.575 18.925a.375.375 0 11-.531 0 .375.375 0 01.531 0"
    />,
    <path
      className="single-neutral-actions-key_svg__cls-1"
      d="M19.086 17.71l3.688-3.688a1.624 1.624 0 10-2.3-2.3l-3.684 3.691a4.061 4.061 0 102.3 2.3z"
    />
  );

export default SvgSingleNeutralActionsKey;