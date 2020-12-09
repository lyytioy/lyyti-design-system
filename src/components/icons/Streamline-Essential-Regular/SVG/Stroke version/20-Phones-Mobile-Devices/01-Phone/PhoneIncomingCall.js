import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneIncomingCall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-incoming-call_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-incoming-call_svg__a"
      d="M4.285 13.477h-.011A4.5 4.5 0 00.75 17.873v.89a1.5 1.5 0 001.5 1.5H6a1.5 1.5 0 001.5-1.5 1.5 1.5 0 011.5-1.5h6a1.5 1.5 0 011.5 1.5 1.5 1.5 0 001.5 1.5h3.75a1.5 1.5 0 001.5-1.5v-.89a4.5 4.5 0 00-3.524-4.393h-.011a40.613 40.613 0 00-15.43-.003zM12 9.013v-5.25M6.75 9.013L4.5 5.263M17.25 9.013l2.25-3.75"
    />
  );

export default SvgPhoneIncomingCall;
