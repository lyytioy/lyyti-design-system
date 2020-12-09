import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsReceive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-receive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-receive_svg__a"
      d="M7.493 10.013a2 2 0 000-2.829L5.371 5.063a2 2 0 00-2.829 0L1.378 6.227A3 3 0 001 10a46.549 46.549 0 0013 13 3 3 0 003.776-.379l1.164-1.164a2 2 0 000-2.828l-2.122-2.121a2 2 0 00-2.828 0l-.707.707a47.481 47.481 0 01-6.5-6.5zM13.499 10.501l10-10M20.001 10.5h-6.5V4"
    />
  );

export default SvgPhoneActionsReceive;
