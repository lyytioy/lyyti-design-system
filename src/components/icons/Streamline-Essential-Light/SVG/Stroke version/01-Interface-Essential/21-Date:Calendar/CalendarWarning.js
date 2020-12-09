import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-warning_svg__a"
      d="M17.5 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 18.501v-3"
    />,
    <path
      className="calendar-warning_svg__a"
      d="M18.338 12.5a.95.95 0 00-1.676 0l-5.056 9.634a.925.925 0 00.031.915.948.948 0 00.807.448h10.112a.948.948 0 00.807-.448.925.925 0 00.031-.915z"
    />,
    <path
      className="calendar-warning_svg__a"
      d="M9.5 18.5h-8a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1V10M5.5.501v5M15.5.501v5M.5 7.501h20"
    />
  );

export default SvgCalendarWarning;
