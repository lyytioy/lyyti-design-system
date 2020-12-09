import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsRecord = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-record_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-record_svg__a"
      d="M7.492 10.013a2 2 0 000-2.828L5.369 5.064a2 2 0 00-2.828 0L1.378 6.228A2.994 2.994 0 001 10a46.47 46.47 0 0013 13 3 3 0 003.774-.379l1.164-1.162a2 2 0 000-2.828l-2.121-2.123a2 2 0 00-2.829 0l-.707.707a47.474 47.474 0 01-6.5-6.5z"
    />,
    <circle className="phone-actions-record_svg__a" cx={17.5} cy={6.5} r={6} />,
    <circle className="phone-actions-record_svg__a" cx={17.5} cy={6.5} r={2} />
  );

export default SvgPhoneActionsRecord;
