import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-lock_svg__a"
      d="M7.492 10.012a2 2 0 000-2.828L5.37 5.063a2 2 0 00-2.828 0L1.378 6.226A3 3 0 001 10a46.509 46.509 0 0013 13 3 3 0 003.774-.379l1.164-1.163a2 2 0 000-2.828l-2.121-2.12a2 2 0 00-2.829 0l-.707.707a47.489 47.489 0 01-6.5-6.5z"
    />,
    <rect
      className="phone-actions-lock_svg__a"
      x={14.5}
      y={4.502}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle
      className="phone-actions-lock_svg__a"
      cx={19}
      cy={8.564}
      r={1.25}
    />,
    <path
      className="phone-actions-lock_svg__a"
      d="M21.5 3a2.5 2.5 0 00-5 0v1.5h5z"
    />
  );

export default SvgPhoneActionsLock;
