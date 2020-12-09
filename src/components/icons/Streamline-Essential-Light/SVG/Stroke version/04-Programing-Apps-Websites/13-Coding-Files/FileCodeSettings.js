import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="file-code-settings_svg__a"
      cx={17.766}
      cy={16.972}
      r={1.437}
    />,
    <path
      className="file-code-settings_svg__a"
      d="M18.987 11.412l.424 1.392a.951.951 0 001.124.652l1.411-.327a1.283 1.283 0 011.221 2.126l-.987 1.065a.96.96 0 000 1.3l.987 1.065a1.283 1.283 0 01-1.221 2.126l-1.411-.327a.951.951 0 00-1.124.652l-.424 1.392a1.275 1.275 0 01-2.442 0l-.424-1.392A.953.953 0 0015 20.489l-1.411.327a1.283 1.283 0 01-1.221-2.126l.987-1.065a.96.96 0 000-1.3l-.987-1.065a1.283 1.283 0 011.221-2.126l1.411.322a.953.953 0 001.125-.652l.424-1.392a1.275 1.275 0 012.438 0z"
    />,
    <path
      className="file-code-settings_svg__a"
      d="M10.516 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V7.5M3.516 5.504v4M12.516 5.504v4M9.516 12.504v4M15.516 5.504v4"
    />,
    <path
      className="file-code-settings_svg__a"
      d="M8.016 5.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0V7a1.5 1.5 0 011.5-1.5zM5.016 12.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0v-1a1.5 1.5 0 011.5-1.5z"
    />
  );

export default SvgFileCodeSettings;
