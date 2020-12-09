import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlertMessageLaptop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alert-message-laptop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alert-message-laptop_svg__a"
      d="M8.5 7.5H4.667A1.667 1.667 0 003 9.168V20.5M20 20.501v-6.5"
    />,
    <path
      className="alert-message-laptop_svg__a"
      d="M23 20.5a3 3 0 01-3 3H3a3 3 0 01-3-3zM16.933.5A5.954 5.954 0 0011 6.567a5.944 5.944 0 00.781 3.193L10 13.5l3.741-1.782A6.064 6.064 0 1016.933.5z"
    />,
    <path
      className="alert-message-laptop_svg__a"
      d="M17 8.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17 7.001v-3"
    />
  );

export default SvgAlertMessageLaptop;
