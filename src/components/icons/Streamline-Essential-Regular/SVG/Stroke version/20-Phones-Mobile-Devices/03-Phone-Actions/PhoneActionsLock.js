import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-lock_svg__a"
      d="M12.37 22.54l.01.006a4.5 4.5 0 005.6-.614l.629-.63a1.5 1.5 0 000-2.121l-2.651-2.652a1.5 1.5 0 00-2.122 0 1.5 1.5 0 01-2.121 0l-4.244-4.242a1.5 1.5 0 010-2.121 1.5 1.5 0 000-2.122L4.819 5.393a1.5 1.5 0 00-2.121 0l-.63.629a4.5 4.5 0 00-.614 5.6l.006.01A40.606 40.606 0 0012.37 22.54z"
    />,
    <rect
      className="phone-actions-lock_svg__a"
      x={14.25}
      y={5.25}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="phone-actions-lock_svg__a"
      d="M18.75.75a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 8.655a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgPhoneActionsLock;
