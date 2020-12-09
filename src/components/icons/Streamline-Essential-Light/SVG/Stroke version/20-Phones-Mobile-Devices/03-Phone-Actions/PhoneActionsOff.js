import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-off_svg__a"
      d="M23.5.5l-23 23M11.467 9.705a45.752 45.752 0 01-1.706-1.963l.708-.707a2 2 0 000-2.828L8.347 2.086a2 2 0 00-2.829 0L4.354 3.249a3 3 0 00-.378 3.775 45.812 45.812 0 004.468 5.7M11.272 15.556a45.812 45.812 0 005.7 4.468 3 3 0 003.774-.378l1.164-1.165a2 2 0 000-2.828l-2.121-2.121a2 2 0 00-2.829 0l-.706.707a44.967 44.967 0 01-1.954-1.706"
    />
  );

export default SvgPhoneActionsOff;
