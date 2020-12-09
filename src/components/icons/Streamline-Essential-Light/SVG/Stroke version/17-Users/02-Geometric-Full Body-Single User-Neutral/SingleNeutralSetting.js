import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralSetting = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-setting_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-setting_svg__cls-1"
      cx={17.75}
      cy={6.969}
      r={1.437}
    />,
    <path
      className="single-neutral-setting_svg__cls-1"
      d="M18.971 1.408L19.4 2.8a.953.953 0 001.124.653l1.412-.328a1.283 1.283 0 011.221 2.126l-.988 1.065a.96.96 0 000 1.305l.988 1.065a1.283 1.283 0 01-1.221 2.126l-1.412-.327a.951.951 0 00-1.124.653l-.424 1.392a1.275 1.275 0 01-2.442 0l-.424-1.392a.951.951 0 00-1.124-.653l-1.412.327a1.283 1.283 0 01-1.221-2.126l.988-1.065a.96.96 0 000-1.305l-.988-1.065a1.283 1.283 0 011.221-2.126l1.412.328a.953.953 0 001.119-.653l.424-1.392a1.275 1.275 0 012.442 0zM7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="single-neutral-setting_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />
  );

export default SvgSingleNeutralSetting;
