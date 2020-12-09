import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-flash_svg__a"
      d="M16.5 15.75v4.768a2.732 2.732 0 01-2.733 2.732H7.233A2.732 2.732 0 014.5 20.518V4.983A2.733 2.733 0 017.233 2.25h4.017M4.5 18.75h12"
    />,
    <path
      className="phone-action-flash_svg__a"
      d="M16.5.75l-5.911 6.882a.375.375 0 00.286.618H13.5v6l5.911-6.882a.376.376 0 00-.286-.618H16.5z"
    />
  );

export default SvgPhoneActionFlash;
