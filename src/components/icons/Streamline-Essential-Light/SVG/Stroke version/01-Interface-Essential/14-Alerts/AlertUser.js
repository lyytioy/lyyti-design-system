import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlertUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alert-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alert-user_svg__a"
      d="M17.433.5A5.954 5.954 0 0011.5 6.567a5.944 5.944 0 00.781 3.193L10.5 13.5l3.741-1.782A6.064 6.064 0 1017.433.5z"
    />,
    <path
      className="alert-user_svg__a"
      d="M17.5 8.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 7.001v-3M16.5 14.501v9M.5 23.5v-18a2 2 0 012-2H10M9.5 7.501h-9"
    />,
    <circle className="alert-user_svg__a" cx={8} cy={16.751} r={2.25} />,
    <path
      className="alert-user_svg__a"
      d="M12.5 23.5a4.644 4.644 0 00-9 0M7 5.501h2.5"
    />
  );

export default SvgAlertUser;
