import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsWait = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-wait_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="phone-actions-wait_svg__a"
      cx={13.512}
      cy={5.651}
      r={1}
    />,
    <circle
      className="phone-actions-wait_svg__a"
      cx={17.512}
      cy={5.651}
      r={1}
    />,
    <circle
      className="phone-actions-wait_svg__a"
      cx={21.512}
      cy={5.651}
      r={1}
    />,
    <path
      className="phone-actions-wait_svg__a"
      d="M8.48 8.024a2 2 0 000-2.828L6.358 3.075a2 2 0 00-2.829 0L2.366 4.238a3 3 0 00-.378 3.775 46.483 46.483 0 0013 13 3 3 0 003.774-.379l1.164-1.163a2 2 0 000-2.828l-2.121-2.122a2 2 0 00-2.829 0l-.707.707a47.481 47.481 0 01-6.5-6.5z"
    />
  );

export default SvgPhoneActionsWait;
