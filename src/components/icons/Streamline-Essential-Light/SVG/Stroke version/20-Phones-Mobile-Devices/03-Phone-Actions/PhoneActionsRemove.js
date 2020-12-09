import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-remove_svg__a"
      d="M7.492 10.013a2 2 0 000-2.829L5.369 5.063a2 2 0 00-2.828 0L1.378 6.227A3 3 0 001 10a46.509 46.509 0 0013 13 3 3 0 003.775-.379l1.164-1.163a2 2 0 000-2.828l-2.122-2.12a2 2 0 00-2.829 0l-.707.707a47.44 47.44 0 01-6.5-6.5z"
    />,
    <circle
      className="phone-actions-remove_svg__a"
      cx={17.497}
      cy={6.501}
      r={6}
    />,
    <path
      className="phone-actions-remove_svg__a"
      d="M19.618 4.38l-4.243 4.242M19.618 8.622L15.375 4.38"
    />
  );

export default SvgPhoneActionsRemove;
