import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsPause = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-pause_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-pause_svg__a"
      d="M12.464 22.54l.01.006a4.5 4.5 0 005.6-.614l.629-.63a1.5 1.5 0 000-2.121l-2.653-2.652a1.5 1.5 0 00-2.122 0 1.5 1.5 0 01-2.121 0l-4.243-4.242a1.5 1.5 0 010-2.121 1.5 1.5 0 000-2.122L4.913 5.393a1.5 1.5 0 00-2.122 0l-.629.629a4.5 4.5 0 00-.615 5.6l.007.01a40.592 40.592 0 0010.91 10.908zM15.656 9a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5V7.5a1.5 1.5 0 01-1.5 1.5zM21.656 9a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5V7.5a1.5 1.5 0 01-1.5 1.5z"
    />
  );

export default SvgPhoneActionsPause;
