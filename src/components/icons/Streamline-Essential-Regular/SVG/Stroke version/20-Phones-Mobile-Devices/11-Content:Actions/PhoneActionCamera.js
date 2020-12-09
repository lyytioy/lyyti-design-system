import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-camera_svg__a"
      d="M14.25 12.75v7.768a2.732 2.732 0 01-2.733 2.732H4.983a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 014.983 2.25H6.75M2.25 18.75h12"
    />,
    <path
      className="phone-action-camera_svg__a"
      d="M21.75 2.25l-3 1v-1a1.5 1.5 0 00-1.5-1.5h-6a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-1l3 1z"
    />
  );

export default SvgPhoneActionCamera;
