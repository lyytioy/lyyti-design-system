import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="email-action-settings_svg__a"
      cx={17.75}
      cy={17.031}
      r={1.437}
    />,
    <path
      className="email-action-settings_svg__a"
      d="M18.971 11.47l.424 1.392a.951.951 0 001.124.653l1.412-.327a1.283 1.283 0 011.221 2.126l-.988 1.065a.96.96 0 000 1.3l.988 1.065a1.283 1.283 0 01-1.221 2.126l-1.412-.328a.953.953 0 00-1.119.658l-.424 1.392a1.275 1.275 0 01-2.442 0l-.429-1.392a.953.953 0 00-1.124-.653l-1.412.328a1.283 1.283 0 01-1.221-2.126l.988-1.065a.96.96 0 000-1.3l-.988-1.065a1.283 1.283 0 011.221-2.126l1.412.327a.951.951 0 001.124-.653l.424-1.392a1.275 1.275 0 012.442-.005z"
    />,
    <path
      className="email-action-settings_svg__a"
      d="M9.5 14.5H2A1.5 1.5 0 01.5 13V2A1.5 1.5 0 012 .5h18A1.5 1.5 0 0121.5 2v7.5"
    />,
    <path
      className="email-action-settings_svg__a"
      d="M21.067.946L11 9 .933.946"
    />
  );

export default SvgEmailActionSettings;
