import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsAlarm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-alarm_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-alarm_svg__cls-1"
      d="M12 16.5H1c.423-2.286.353-3.58 1.609-4.118L7 10.5v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2l2.307.989M22.5 20.5a.5.5 0 00.4-.792 4.03 4.03 0 01-.9-2.541v-1.5a4.116 4.116 0 00-3.607-4.153A4 4 0 0014 15.5v1.667a4.03 4.03 0 01-.9 2.541.5.5 0 00.4.792zM16.714 22.5a1.327 1.327 0 002.572 0"
    />
  );

export default SvgSingleManActionsAlarm;
