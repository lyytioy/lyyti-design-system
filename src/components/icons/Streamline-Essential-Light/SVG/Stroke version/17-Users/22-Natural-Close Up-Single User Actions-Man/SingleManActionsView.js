import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsView = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-view_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-view_svg__cls-1"
      cx={17.029}
      cy={17.029}
      r={4.529}
    />,
    <path
      className="single-man-actions-view_svg__cls-1"
      d="M23.5 23.5l-3.248-3.248M10.5 16.5H.5c.423-2.286.353-3.58 1.609-4.118L6.5 10.5v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2l2.516 1.078"
    />
  );

export default SvgSingleManActionsView;
