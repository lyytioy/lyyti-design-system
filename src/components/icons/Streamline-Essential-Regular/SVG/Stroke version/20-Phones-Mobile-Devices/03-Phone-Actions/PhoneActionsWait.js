import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsWait = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-wait_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-wait_svg__a"
      d="M13.12 20.853l.01.006a4.5 4.5 0 005.6-.614l.629-.63a1.5 1.5 0 000-2.121l-2.651-2.652a1.5 1.5 0 00-2.122 0 1.5 1.5 0 01-2.121 0L8.221 10.6a1.5 1.5 0 010-2.122 1.5 1.5 0 000-2.121L5.569 3.705a1.5 1.5 0 00-2.121 0l-.63.63a4.5 4.5 0 00-.614 5.6l.006.01a40.62 40.62 0 0010.91 10.908zM13.875 3.188a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.625 3.188a.375.375 0 10.375.375.375.375 0 00-.375-.375M21.375 3.188a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgPhoneActionsWait;
