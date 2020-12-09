import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsTime = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-time_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-time_svg__cls-1"
      d="M9 16.5H.5c.423-2.286.353-3.579 1.609-4.118L6.5 10.5v-2s-.945-.349-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.429.422-2 .491-2 5.331-2 5.822 0a2.628 2.628 0 01-.44 2c.951 0 .691 2 .007 2 0 2.151-.866 2.5-.866 2.5v2l1.5.643"
    />,
    <circle
      className="single-man-actions-time_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="single-man-actions-time_svg__cls-1"
      d="M19.5 17.7h-2v-3.2"
    />
  );

export default SvgSingleManActionsTime;
