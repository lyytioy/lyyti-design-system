import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-download_svg__a{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px;stroke-linecap:round}"
        }
      </style>
    </defs>,
    <circle className="calendar-download_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="calendar-download_svg__a"
      d="M17.25 14.25v6M17.25 20.25L15 18M17.25 20.25L19.5 18M8.25 17.25h-6a1.5 1.5 0 01-1.5-1.5V3.765a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5V8.25"
    />,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.75 6.75h16.5"
    />,
    <path
      className="calendar-download_svg__a"
      d="M5.243 3.75v-3M12.743 3.75v-3"
    />
  );

export default SvgCalendarDownload;
