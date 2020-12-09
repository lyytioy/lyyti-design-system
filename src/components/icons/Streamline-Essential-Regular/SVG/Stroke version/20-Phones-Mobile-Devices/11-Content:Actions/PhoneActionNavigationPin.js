import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionNavigationPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-navigation-pin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-navigation-pin_svg__a"
      d="M15.75 15.75v4.768a2.732 2.732 0 01-2.733 2.732H6.483a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 016.483 2.25H9M3.75 18.75h12M15.75 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="phone-action-navigation-pin_svg__a"
      d="M15.75.75a4.5 4.5 0 014.5 4.5c0 1.921-2.688 5.576-3.909 7.138a.75.75 0 01-1.182 0c-1.221-1.561-3.909-5.217-3.909-7.138a4.5 4.5 0 014.5-4.5z"
    />
  );

export default SvgPhoneActionNavigationPin;
