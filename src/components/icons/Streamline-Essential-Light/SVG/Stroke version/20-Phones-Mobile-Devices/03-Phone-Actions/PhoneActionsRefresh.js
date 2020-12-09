import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-refresh_svg__a"
      d="M7.492 10.013a2 2 0 000-2.828L5.37 5.064a2 2 0 00-2.828 0L1.378 6.227A3 3 0 001 10a46.5 46.5 0 0013 13 3 3 0 003.774-.379l1.163-1.163a2 2 0 000-2.828l-2.12-2.122a2 2 0 00-2.829 0l-.707.708a47.489 47.489 0 01-6.5-6.5zM18.815 5h4.5V.5M22.973 5a6 6 0 10-.968 5.742"
    />
  );

export default SvgPhoneActionsRefresh;
