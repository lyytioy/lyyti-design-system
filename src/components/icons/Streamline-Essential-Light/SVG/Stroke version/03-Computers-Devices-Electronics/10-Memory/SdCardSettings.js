import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-settings_svg__a"
      d="M17.5 8.5V5.914a1 1 0 00-.293-.707L12.794.793A1 1 0 0012.087.5H1.5a1 1 0 00-1 1v8h1v3h-1v10a1 1 0 001 1H11M4.501 3.5v5M7.501 3.5v5M10.501 3.5v5M13.501 5.5v4"
    />,
    <circle
      className="sd-card-settings_svg__a"
      cx={17.749}
      cy={17.032}
      r={1.437}
    />,
    <path
      className="sd-card-settings_svg__a"
      d="M18.97 11.471l.424 1.392a.951.951 0 001.124.652l1.411-.327a1.283 1.283 0 011.222 2.126l-.988 1.065a.96.96 0 000 1.3l.988 1.065a1.283 1.283 0 01-1.222 2.126l-1.411-.327a.951.951 0 00-1.124.652l-.424 1.392a1.275 1.275 0 01-2.442 0L16.1 21.2a.952.952 0 00-1.125-.652l-1.411.327a1.283 1.283 0 01-1.221-2.126l.987-1.065a.96.96 0 000-1.3l-.987-1.065a1.283 1.283 0 011.221-2.126l1.411.327a.952.952 0 001.125-.652l.424-1.392a1.275 1.275 0 012.446-.005z"
    />
  );

export default SvgSdCardSettings;
