import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-clock_svg__a"
      d="M7.491 10.014a2 2 0 000-2.828L5.37 5.064a2 2 0 00-2.829 0L1.378 6.228A3 3 0 001 10a46.536 46.536 0 0013 13 3 3 0 003.774-.379l1.164-1.163a2 2 0 000-2.829l-2.122-2.119a2 2 0 00-2.829 0l-.707.707a47.474 47.474 0 01-6.5-6.5z"
    />,
    <circle
      className="phone-actions-clock_svg__a"
      cx={17.497}
      cy={6.5}
      r={6}
    />,
    <path className="phone-actions-clock_svg__a" d="M19.497 6.5h-2v-3" />
  );

export default SvgPhoneActionsClock;
