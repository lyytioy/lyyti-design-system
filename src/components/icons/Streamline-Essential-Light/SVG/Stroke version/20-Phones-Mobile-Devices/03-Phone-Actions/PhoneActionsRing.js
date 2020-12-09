import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsRing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-ring_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-ring_svg__a"
      d="M7.492 10.013a2 2 0 000-2.829L5.37 5.063a2 2 0 00-2.828 0L1.378 6.227A3 3 0 001 10a46.5 46.5 0 0013 13 3 3 0 003.773-.379l1.165-1.164a2 2 0 000-2.828l-2.122-2.121a2 2 0 00-2.828 0l-.707.707a47.418 47.418 0 01-6.5-6.5zM12 .5A11.5 11.5 0 0123.5 12M12 4.5a7.5 7.5 0 017.5 7.5M12 8.5a3.5 3.5 0 013.5 3.5"
    />
  );

export default SvgPhoneActionsRing;
