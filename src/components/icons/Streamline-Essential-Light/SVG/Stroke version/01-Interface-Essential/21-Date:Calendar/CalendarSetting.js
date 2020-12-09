import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarSetting = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-setting_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="calendar-setting_svg__a"
      cx={17.75}
      cy={17.032}
      r={1.437}
    />,
    <path
      className="calendar-setting_svg__a"
      d="M18.971 11.471l.424 1.392a.951.951 0 001.124.653l1.412-.327a1.283 1.283 0 011.221 2.126l-.988 1.064a.962.962 0 000 1.306l.988 1.064a1.283 1.283 0 01-1.221 2.126l-1.412-.327a.951.951 0 00-1.119.652l-.424 1.392a1.275 1.275 0 01-2.442 0l-.429-1.392a.951.951 0 00-1.124-.653l-1.412.327a1.283 1.283 0 01-1.221-2.126l.988-1.064a.962.962 0 000-1.306l-.988-1.064a1.283 1.283 0 011.221-2.126l1.412.327a.951.951 0 001.124-.653l.424-1.392a1.275 1.275 0 012.442.001z"
    />,
    <path
      className="calendar-setting_svg__a"
      d="M9.5 18.5h-8a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1V10M5.5.501v5M15.5.501v5M.5 7.501h20"
    />
  );

export default SvgCalendarSetting;
