import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionWifi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-wifi_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-wifi_svg__a"
      d="M15 13.5v7.018a2.732 2.732 0 01-2.733 2.732H5.733A2.732 2.732 0 013 20.518V4.983A2.733 2.733 0 015.733 2.25M3 18.75h12M15 9.675a.375.375 0 10.375.375.375.375 0 00-.375-.375M21 2.873a9.542 9.542 0 00-12 0M11.5 6.488a5.568 5.568 0 017 0"
    />
  );

export default SvgPhoneActionWifi;
