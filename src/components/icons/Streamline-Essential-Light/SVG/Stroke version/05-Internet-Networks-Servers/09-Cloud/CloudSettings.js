import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-settings_svg__a"
      d="M20.5 13.937A4.311 4.311 0 0023 9.888a4.71 4.71 0 00-4.954-4.634A6.7 6.7 0 0012 1.531 6.606 6.606 0 005.325 7.64 3.562 3.562 0 001 11.049a3.186 3.186 0 002.5 3.278"
    />,
    <circle
      className="cloud-settings_svg__a"
      cx={12.25}
      cy={16.031}
      r={1.438}
    />,
    <path
      className="cloud-settings_svg__a"
      d="M13.471 10.47l.424 1.392a.951.951 0 001.125.653l1.411-.327a1.283 1.283 0 011.221 2.126l-.988 1.064a.96.96 0 000 1.3l.987 1.065a1.283 1.283 0 01-1.221 2.126l-1.411-.327a.951.951 0 00-1.119.658l-.424 1.392a1.275 1.275 0 01-2.442 0l-.429-1.392a.951.951 0 00-1.125-.653l-1.411.327a1.283 1.283 0 01-1.221-2.126l.987-1.065a.96.96 0 000-1.3l-.987-1.065a1.283 1.283 0 011.221-2.126l1.411.327a.952.952 0 001.125-.653l.424-1.392a1.275 1.275 0 012.442-.004z"
    />
  );

export default SvgCloudSettings;
