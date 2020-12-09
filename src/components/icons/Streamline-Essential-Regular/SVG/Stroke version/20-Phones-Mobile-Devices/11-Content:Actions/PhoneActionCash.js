import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-cash_svg__a"
      d="M15.375 14.25v6.268a2.732 2.732 0 01-2.733 2.732H6.108a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 016.108 2.25h6.267M3.375 18.75h12M16.125 9a2.25 2.25 0 102.25-2.25 2.25 2.25 0 112.25-2.25M18.375.75v1.5M18.375 11.25v1.5"
    />
  );

export default SvgPhoneActionCash;
