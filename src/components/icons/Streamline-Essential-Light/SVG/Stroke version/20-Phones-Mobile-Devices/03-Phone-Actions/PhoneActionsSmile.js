import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsSmile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-smile_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-smile_svg__a"
      d="M15.25 4.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.75 4.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.5 8a2 2 0 01-4 0z"
    />,
    <path
      className="phone-actions-smile_svg__a"
      d="M17.433.5a6.059 6.059 0 00-5.152 9.259L10.5 13.5l3.741-1.782A6.064 6.064 0 1017.433.5z"
    />,
    <path
      className="phone-actions-smile_svg__a"
      d="M8.612 12.813a44.777 44.777 0 01-1.828-2.093l.708-.707a2 2 0 000-2.828L5.369 5.064a2 2 0 00-2.828 0L1.378 6.228A2.994 2.994 0 001 10a46.457 46.457 0 0013 13 3 3 0 003.774-.378l1.164-1.163a2 2 0 000-2.828l-2.121-2.123a2 2 0 00-2.829 0l-.707.707a45.845 45.845 0 01-2.094-1.828"
    />
  );

export default SvgPhoneActionsSmile;
