import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-share_svg__a"
      d="M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061V8.25"
    />,
    <circle
      className="time-clock-file-share_svg__a"
      cx={8.25}
      cy={9.75}
      r={4.5}
    />,
    <path className="time-clock-file-share_svg__a" d="M9.75 9.75h-1.5v-1.5" />,
    <circle
      className="time-clock-file-share_svg__a"
      cx={13.5}
      cy={18}
      r={2.25}
    />,
    <circle
      className="time-clock-file-share_svg__a"
      cx={21}
      cy={21}
      r={2.25}
    />,
    <circle
      className="time-clock-file-share_svg__a"
      cx={21}
      cy={13.5}
      r={2.25}
    />,
    <path
      className="time-clock-file-share_svg__a"
      d="M15.425 16.845l3.65-2.19M15.588 18.836l3.324 1.329"
    />
  );

export default SvgTimeClockFileShare;
