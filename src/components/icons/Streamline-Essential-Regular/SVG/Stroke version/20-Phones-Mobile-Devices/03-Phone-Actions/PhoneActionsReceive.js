import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsReceive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-receive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-receive_svg__a"
      d="M12.745 22.165l.01.007a4.5 4.5 0 005.6-.615l.629-.629a1.5 1.5 0 000-2.122l-2.651-2.651a1.5 1.5 0 00-2.122 0 1.5 1.5 0 01-2.121 0l-4.244-4.243a1.5 1.5 0 010-2.121 1.5 1.5 0 000-2.122L5.194 5.018a1.5 1.5 0 00-2.121 0l-.63.629a4.5 4.5 0 00-.614 5.6l.006.01a40.606 40.606 0 0010.91 10.908zM13.125 10.875l9.75-9.75M19.125 10.875h-6v-6"
    />
  );

export default SvgPhoneActionsReceive;
