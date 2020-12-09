import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="folder-settings_svg__a"
      cx={17.75}
      cy={17.031}
      r={1.437}
    />,
    <path
      className="folder-settings_svg__a"
      d="M18.971 11.47l.424 1.392a.951.951 0 001.124.653l1.412-.327a1.283 1.283 0 011.221 2.126l-.988 1.065a.96.96 0 000 1.3l.988 1.065a1.283 1.283 0 01-1.221 2.126l-1.412-.328a.953.953 0 00-1.119.658l-.424 1.392a1.275 1.275 0 01-2.442 0l-.429-1.392a.953.953 0 00-1.124-.653l-1.412.328a1.283 1.283 0 01-1.221-2.126l.988-1.065a.96.96 0 000-1.3l-.988-1.065a1.283 1.283 0 011.221-2.126l1.412.327a.951.951 0 001.124-.653l.424-1.392a1.275 1.275 0 012.442-.005z"
    />,
    <path
      className="folder-settings_svg__a"
      d="M20.5 8V4.5a1 1 0 00-1-1H9.618a1 1 0 01-.894-.553l-.948-1.894A1 1 0 006.882.5H1.5a1 1 0 00-1 1v15a1 1 0 001 1H9"
    />
  );

export default SvgFolderSettings;
