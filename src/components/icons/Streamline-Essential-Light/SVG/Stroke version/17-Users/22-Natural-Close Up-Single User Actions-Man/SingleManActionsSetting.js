import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsSetting = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-setting_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-setting_svg__cls-1"
      d="M10.5 16.5H.5c.423-2.286.353-3.579 1.609-4.118L6.5 10.5v-2s-.945-.349-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.429.422-2 .491-2 5.331-2 5.822 0a2.628 2.628 0 01-.44 2c.951 0 .691 2 .007 2 0 2.151-.866 2.5-.866 2.5v2l1.5.643"
    />,
    <circle
      className="single-man-actions-setting_svg__cls-1"
      cx={17.75}
      cy={17.032}
      r={1.437}
    />,
    <path
      className="single-man-actions-setting_svg__cls-1"
      d="M18.971 11.471l.424 1.392a.951.951 0 001.124.652l1.412-.327a1.283 1.283 0 011.221 2.126l-.988 1.065a.96.96 0 000 1.3l.988 1.065a1.283 1.283 0 01-1.221 2.126l-1.412-.327a.951.951 0 00-1.119.657l-.424 1.392a1.275 1.275 0 01-2.442 0l-.429-1.392a.951.951 0 00-1.124-.652l-1.412.327a1.283 1.283 0 01-1.221-2.126l.988-1.065a.96.96 0 000-1.3l-.988-1.065a1.283 1.283 0 011.221-2.126l1.412.327a.951.951 0 001.124-.652l.424-1.392a1.275 1.275 0 012.442-.005z"
    />
  );

export default SvgSingleManActionsSetting;
