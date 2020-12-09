import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionAddUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-add-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-add-user_svg__a"
      d="M13.5 15.75v4.768a2.732 2.732 0 01-2.733 2.732H4.233A2.732 2.732 0 011.5 20.518V4.983A2.733 2.733 0 014.233 2.25H8.25M1.5 18.75h12M19.5 6.75v6M16.5 9.75h6"
    />,
    <circle
      className="phone-action-add-user_svg__a"
      cx={14.25}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="phone-action-add-user_svg__a"
      d="M16.486 6.5A5.252 5.252 0 009 11.25v1.5h7.5"
    />
  );

export default SvgPhoneActionAddUser;
