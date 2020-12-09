import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileSetting = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-setting_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-setting_svg__a"
      d="M11.5 23.5h-10a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V7.5M9.476 15.5a5 5 0 114.732-6.687"
    />,
    <path className="time-clock-file-setting_svg__a" d="M9.5 7.501v3h2" />,
    <circle
      className="time-clock-file-setting_svg__a"
      cx={17.75}
      cy={17.032}
      r={1.437}
    />,
    <path
      className="time-clock-file-setting_svg__a"
      d="M18.971 11.471l.424 1.392a.951.951 0 001.124.653l1.412-.327a1.283 1.283 0 011.221 2.126l-.988 1.064a.962.962 0 000 1.306l.988 1.064a1.283 1.283 0 01-1.221 2.126l-1.412-.327a.951.951 0 00-1.119.652l-.424 1.392a1.275 1.275 0 01-2.442 0l-.429-1.392a.951.951 0 00-1.124-.653l-1.412.327a1.283 1.283 0 01-1.221-2.126l.988-1.064a.962.962 0 000-1.306l-.988-1.064a1.283 1.283 0 011.221-2.126l1.412.327a.951.951 0 001.124-.653l.424-1.392a1.275 1.275 0 012.442.001z"
    />
  );

export default SvgTimeClockFileSetting;
