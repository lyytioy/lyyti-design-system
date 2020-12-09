import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsInfo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-info_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-info_svg__a"
      d="M7.471 12.287a1.5 1.5 0 010-2.121 1.5 1.5 0 000-2.122L4.819 5.393a1.5 1.5 0 00-2.121 0l-.63.629a4.5 4.5 0 00-.614 5.6l.006.01A40.606 40.606 0 0012.37 22.54l.01.007a4.5 4.5 0 005.6-.615l.629-.629a1.5 1.5 0 000-2.122l-2.653-2.651a1.5 1.5 0 00-2.122 0 1.5 1.5 0 01-2.121 0M17.25 6.75v-3M17.25 8.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="phone-actions-info_svg__a"
      d="M17.25.75a6 6 0 00-5.23 8.94l-1.52 4.56 4.426-1.967A6 6 0 1017.25.75z"
    />
  );

export default SvgPhoneActionsInfo;
