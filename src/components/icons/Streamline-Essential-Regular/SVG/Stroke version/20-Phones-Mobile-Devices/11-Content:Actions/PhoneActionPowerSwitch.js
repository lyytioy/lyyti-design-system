import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionPowerSwitch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-power-switch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-power-switch_svg__a"
      d="M14.25 16.5v4.018a2.732 2.732 0 01-2.733 2.732H4.983a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 014.983 2.25H8.25M2.25 18.75h12M15.75.75v5.143M19.993 3.258a6 6 0 11-8.486 0"
    />
  );

export default SvgPhoneActionPowerSwitch;
