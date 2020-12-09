import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsSetting = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-setting_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-setting_svg__cls-1"
      cx={17.75}
      cy={17.031}
      r={1.437}
    />,
    <path
      className="single-man-actions-setting_svg__cls-1"
      d="M18.971 11.47l.424 1.392a.951.951 0 001.124.653l1.412-.327a1.283 1.283 0 011.221 2.126l-.988 1.065a.96.96 0 000 1.3l.988 1.065a1.283 1.283 0 01-1.221 2.126l-1.412-.328a.953.953 0 00-1.119.658l-.424 1.392a1.275 1.275 0 01-2.442 0l-.429-1.392a.953.953 0 00-1.124-.653l-1.412.328a1.283 1.283 0 01-1.221-2.126l.988-1.065a.96.96 0 000-1.3l-.988-1.065a1.283 1.283 0 011.221-2.126l1.412.327a.951.951 0 001.124-.653l.424-1.392a1.275 1.275 0 012.442-.005zM9.5 17.5h-9a7 7 0 0110.783-5.89M3.838 2.593A7.052 7.052 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-setting_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsSetting;
