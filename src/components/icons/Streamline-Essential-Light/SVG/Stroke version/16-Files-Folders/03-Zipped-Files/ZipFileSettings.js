import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="zip-file-settings_svg__a"
      d="M10.5 23.469l-9 .031a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707v2.262"
    />,
    <path
      className="zip-file-settings_svg__a"
      d="M7.255 8a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.255 10.5a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.255 13a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.245 15.5a.25.25 0 11.25.25.25.25 0 01-.25-.25M7.245 18.021a.25.25 0 11.25.25.25.25 0 01-.25-.25M7.245 20.562a.25.25 0 11.25.25.25.25 0 01-.25-.25M8.989 4.111a1.488 1.488 0 01-.357 1.163 1.467 1.467 0 01-1.1.5H7.47a1.467 1.467 0 01-1.1-.5 1.488 1.488 0 01-.357-1.163L6.37.5H8.5z"
    />,
    <circle
      className="zip-file-settings_svg__a"
      cx={17.75}
      cy={17}
      r={1.437}
    />,
    <path
      className="zip-file-settings_svg__a"
      d="M18.971 11.439l.424 1.392a.951.951 0 001.124.653l1.412-.327a1.283 1.283 0 011.221 2.126l-.988 1.064a.962.962 0 000 1.306l.988 1.064a1.283 1.283 0 01-1.221 2.126l-1.412-.327a.951.951 0 00-1.124.653l-.424 1.392a1.275 1.275 0 01-2.442 0l-.424-1.392a.951.951 0 00-1.124-.653l-1.412.327a1.283 1.283 0 01-1.221-2.126l.988-1.064a.962.962 0 000-1.306l-.988-1.064a1.283 1.283 0 011.221-2.126l1.412.327a.951.951 0 001.124-.653l.424-1.392a1.275 1.275 0 012.442 0z"
    />
  );

export default SvgZipFileSettings;
