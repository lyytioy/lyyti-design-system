import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneIncomingCall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-incoming-call_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-incoming-call_svg__a"
      d="M21 14.5a3.186 3.186 0 012.5 3V19a2.015 2.015 0 01-2 2h-3a2.016 2.016 0 01-2-2v-1a46.029 46.029 0 00-9 0v1a2.015 2.015 0 01-2 2h-3a2.015 2.015 0 01-2-2v-1.5a3.186 3.186 0 012.5-3 44.979 44.979 0 0118 0zM12 3v6M2.5 6L7 10.5M21.5 6L17 10.5"
    />
  );

export default SvgPhoneIncomingCall;
