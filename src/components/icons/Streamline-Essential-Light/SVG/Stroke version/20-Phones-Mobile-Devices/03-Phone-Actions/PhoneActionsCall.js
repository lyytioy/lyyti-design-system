import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsCall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-call_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-call_svg__a"
      d="M7.492 10.012a2 2 0 000-2.828L5.37 5.063a2 2 0 00-2.829 0L1.378 6.226A3 3 0 001 10a46.509 46.509 0 0013 13 3 3 0 003.773-.379l1.164-1.164a2 2 0 000-2.828l-2.121-2.119a2 2 0 00-2.828 0l-.707.707a47.432 47.432 0 01-6.5-6.5zM23.5.502l-10 10M17 .501h6.5v6.5"
    />
  );

export default SvgPhoneActionsCall;
