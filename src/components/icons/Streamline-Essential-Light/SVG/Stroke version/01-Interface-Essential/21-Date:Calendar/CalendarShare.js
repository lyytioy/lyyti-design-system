import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="calendar-share_svg__a"
      cx={13.75}
      cy={18.251}
      r={2.25}
    />,
    <circle
      className="calendar-share_svg__a"
      cx={21.25}
      cy={21.251}
      r={2.25}
    />,
    <circle
      className="calendar-share_svg__a"
      cx={21.25}
      cy={13.751}
      r={2.25}
    />,
    <path
      className="calendar-share_svg__a"
      d="M15.675 17.096l3.65-2.19M15.838 19.086l3.324 1.33M9.5 18.5h-8a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1v6M5.5.501v5M15.5.501v5M.5 7.501h20"
    />
  );

export default SvgCalendarShare;
