import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-warning_svg__a"
      d="M9 23.5H1.5a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V9.5"
    />,
    <circle
      className="time-clock-file-warning_svg__a"
      cx={9.5}
      cy={10.501}
      r={5}
    />,
    <path
      className="time-clock-file-warning_svg__a"
      d="M9.5 7.501v3h2M17.5 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 18.501v-3"
    />,
    <path
      className="time-clock-file-warning_svg__a"
      d="M18.338 12.5a.95.95 0 00-1.676 0l-5.056 9.634a.925.925 0 00.031.915.948.948 0 00.807.448h10.112a.948.948 0 00.807-.448.925.925 0 00.031-.915z"
    />
  );

export default SvgTimeClockFileWarning;
