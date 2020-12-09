import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-share_svg__a{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px;stroke-linecap:round}"
        }
      </style>
    </defs>,
    <circle className="calendar-share_svg__a" cx={13.5} cy={18} r={2.25} />,
    <circle className="calendar-share_svg__a" cx={21} cy={21} r={2.25} />,
    <circle className="calendar-share_svg__a" cx={21} cy={13.5} r={2.25} />,
    <path
      className="calendar-share_svg__a"
      d="M15.425 16.845l3.65-2.19M15.588 18.836l3.324 1.329M8.25 17.25h-6a1.5 1.5 0 01-1.5-1.5V3.765a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5V8.25"
    />,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.75 6.75h16.5"
    />,
    <path className="calendar-share_svg__a" d="M5.243 3.75v-3M12.743 3.75v-3" />
  );

export default SvgCalendarShare;
