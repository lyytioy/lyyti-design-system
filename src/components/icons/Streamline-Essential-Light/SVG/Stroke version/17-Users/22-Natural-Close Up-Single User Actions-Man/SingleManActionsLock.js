import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-lock_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <g id="single-man-actions-lock_svg___Group_" data-name="&lt;Group&gt;">
      <rect
        className="single-man-actions-lock_svg__cls-1"
        x={14.5}
        y={15.501}
        width={9}
        height={7.999}
        rx={1}
        ry={1}
      />
      <path
        className="single-man-actions-lock_svg__cls-1"
        d="M19 11.5a3 3 0 00-3 3v1h6v-1a3 3 0 00-3-3z"
      />
      <circle
        className="single-man-actions-lock_svg__cls-1"
        cx={19}
        cy={19.563}
        r={1.25}
      />
    </g>,
    <path
      className="single-man-actions-lock_svg__cls-1"
      d="M12.5 16.5H.5c.423-2.286.353-3.58 1.609-4.118L6.5 10.5v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2L14 12"
    />
  );

export default SvgSingleManActionsLock;
