import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-share_svg__a"
      d="M10.5 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V8.5M9.5 15.5a5 5 0 114.787-3.507"
    />,
    <path className="time-clock-file-share_svg__a" d="M9.5 7.501v3h2" />,
    <circle
      className="time-clock-file-share_svg__a"
      cx={13.75}
      cy={18.251}
      r={2.25}
    />,
    <circle
      className="time-clock-file-share_svg__a"
      cx={21.25}
      cy={21.251}
      r={2.25}
    />,
    <circle
      className="time-clock-file-share_svg__a"
      cx={21.25}
      cy={13.751}
      r={2.25}
    />,
    <path
      className="time-clock-file-share_svg__a"
      d="M15.675 17.096l3.65-2.19M15.838 19.086l3.324 1.33"
    />
  );

export default SvgTimeClockFileShare;
