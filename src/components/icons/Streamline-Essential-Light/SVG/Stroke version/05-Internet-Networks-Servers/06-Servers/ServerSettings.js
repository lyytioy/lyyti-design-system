import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="server-settings_svg__a"
      d="M21.5 4.5a2 2 0 01-2 2h-17a2 2 0 01-2-2v-2a2 2 0 012-2h17a2 2 0 012 2zM2.5 12.5a2 2 0 01-2-2v-2a2 2 0 012-2h17a2 2 0 012 2V10"
    />,
    <path
      className="server-settings_svg__a"
      d="M4.75 3.25A.25.25 0 105 3.5a.25.25 0 00-.25-.25M8.25 3.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M4.75 9.25A.25.25 0 105 9.5a.25.25 0 00-.25-.25M8.25 9.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M9 18.5H2.5a2 2 0 01-2-2v-2a2 2 0 012-2h8"
    />,
    <path
      className="server-settings_svg__a"
      d="M4.75 15.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.25 15.25a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <circle
      className="server-settings_svg__a"
      cx={17.75}
      cy={17.031}
      r={1.438}
    />,
    <path
      className="server-settings_svg__a"
      d="M18.971 11.47l.424 1.392a.951.951 0 001.125.653l1.411-.327a1.283 1.283 0 011.221 2.126l-.988 1.064a.96.96 0 000 1.3l.987 1.065a1.283 1.283 0 01-1.221 2.126l-1.411-.327a.951.951 0 00-1.119.658l-.424 1.392a1.275 1.275 0 01-2.442 0l-.429-1.392a.951.951 0 00-1.125-.653l-1.411.327a1.283 1.283 0 01-1.221-2.126l.987-1.065a.96.96 0 000-1.3l-.987-1.065a1.283 1.283 0 011.221-2.126l1.411.327a.952.952 0 001.125-.653l.424-1.392a1.275 1.275 0 012.442-.004z"
    />
  );

export default SvgServerSettings;
