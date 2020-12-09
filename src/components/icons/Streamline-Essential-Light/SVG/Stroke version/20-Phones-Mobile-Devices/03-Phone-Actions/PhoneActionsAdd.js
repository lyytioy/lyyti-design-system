import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-add_svg__a"
      d="M7.492 10.013a2 2 0 000-2.828L5.37 5.064a2 2 0 00-2.829 0L1.378 6.227A3 3 0 001 10a46.536 46.536 0 0013 13 3 3 0 003.774-.379l1.164-1.164a2 2 0 000-2.828l-2.122-2.119a2 2 0 00-2.829 0l-.706.707a47.432 47.432 0 01-6.5-6.5z"
    />,
    <circle
      className="phone-actions-add_svg__a"
      cx={17.497}
      cy={6.501}
      r={6}
    />,
    <path
      className="phone-actions-add_svg__a"
      d="M17.497 3.501v6M20.497 6.501h-6"
    />
  );

export default SvgPhoneActionsAdd;
