import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlertUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alert-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-width:1.5px;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alert-user_svg__a"
      d="M18 .75a5.227 5.227 0 00-3.938 8.69l-.656 3.779 3.423-2.11A5.246 5.246 0 1018 .75z"
    />,
    <circle className="alert-user_svg__a" cx={8.232} cy={15.375} r={3.375} />,
    <path
      className="alert-user_svg__a"
      d="M13.46 23.243A6.062 6.062 0 003 23.25M18 7.5a.375.375 0 11-.375.375A.375.375 0 0118 7.5"
    />,
    <path
      strokeMiterlimit={10}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18 5.25v-1.5"
    />,
    <path
      className="alert-user_svg__a"
      d="M18 14.25v9M.75 23.25V3.75a3 3 0 013-3h7.5M.75 6.75h9M6.75 3.75h3"
    />
  );

export default SvgAlertUser;
