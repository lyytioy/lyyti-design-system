import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-settings_svg__a"
      cx={17.75}
      cy={17.032}
      r={1.437}
    />,
    <path
      className="messages-bubble-settings_svg__a"
      d="M18.971 11.471l.424 1.392a.951.951 0 001.124.653l1.412-.327a1.282 1.282 0 011.221 2.125l-.988 1.065a.962.962 0 000 1.306l.988 1.064a1.283 1.283 0 01-1.221 2.126l-1.412-.327a.951.951 0 00-1.119.652l-.424 1.392a1.275 1.275 0 01-2.442 0l-.429-1.392a.951.951 0 00-1.124-.653l-1.412.327a1.283 1.283 0 01-1.221-2.126l.988-1.064a.962.962 0 000-1.306l-.988-1.065a1.282 1.282 0 011.221-2.125l1.412.327a.951.951 0 001.124-.653l.424-1.392a1.275 1.275 0 012.442.001z"
    />,
    <path
      className="messages-bubble-settings_svg__a"
      d="M21.331 10.477A6.957 6.957 0 0021.5 9C21.5 4.306 16.8.5 11 .5S.5 4.306.5 9a7.74 7.74 0 003.018 5.96L1.5 19.5l5.637-2.6a12.548 12.548 0 002.368.5"
    />
  );

export default SvgMessagesBubbleSettings;
