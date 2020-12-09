import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsMissedCall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-missed-call_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-missed-call_svg__a"
      d="M7.505 8.514a2 2 0 000-2.829L5.384 3.563a2 2 0 00-2.829 0L1.392 4.727A3 3 0 001.014 8.5a46.483 46.483 0 0013 13 3 3 0 003.773-.378l1.164-1.164a2 2 0 000-2.828l-2.121-2.119a2 2 0 00-2.829 0l-.706.707a47.489 47.489 0 01-6.5-6.5zM11.514 7.5V2h5.5"
    />,
    <path
      className="phone-actions-missed-call_svg__a"
      d="M11.514 2l5.972 6 6-6"
    />
  );

export default SvgPhoneActionsMissedCall;
