import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsRinging = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-ringing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-ringing_svg__a"
      d="M.818 11.471L1.9 12.554a3 3 0 004.242 0l1.591-1.591a1.5 1.5 0 000-2.122L4.64 5.747a1.5 1.5 0 00-2.263.153C-.864 10.3 1.1 14.934 5.082 18.918s8.621 5.946 13.023 2.705a1.5 1.5 0 00.148-2.263l-3.094-3.094a1.5 1.5 0 00-2.122 0l-1.59 1.591a3 3 0 000 4.243l1.093 1.094M11.25 8.25a4.5 4.5 0 014.5 4.5M11.25 4.5a8.25 8.25 0 018.25 8.25M11.25.75a12 12 0 0112 12"
    />
  );

export default SvgPhoneActionsRinging;
