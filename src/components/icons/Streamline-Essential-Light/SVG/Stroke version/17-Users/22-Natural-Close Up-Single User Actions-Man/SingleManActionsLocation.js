import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-location_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-location_svg__cls-1"
      cx={19}
      cy={16.11}
      r={1.5}
    />,
    <path
      className="single-man-actions-location_svg__cls-1"
      d="M23.5 16.11c0 2.476-3.065 5.974-4.136 7.12a.5.5 0 01-.728 0c-1.071-1.146-4.136-4.644-4.136-7.12a4.5 4.5 0 019 0zM12.5 16.61H.5c.423-2.286.353-3.579 1.609-4.118L6.5 10.61v-2s-.945-.349-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.429.422-2 .491-2 5.331-2 5.822 0a2.628 2.628 0 01-.44 2c.951 0 .691 2 .007 2 0 2.151-.866 2.5-.866 2.5v2l2.994 1.283"
    />
  );

export default SvgSingleManActionsLocation;
