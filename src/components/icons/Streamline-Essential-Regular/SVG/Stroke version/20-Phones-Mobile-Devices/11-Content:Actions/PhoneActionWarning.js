import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-warning_svg__a"
      d="M15 15.75v4.768a2.732 2.732 0 01-2.733 2.732H5.733A2.732 2.732 0 013 20.518V4.983A2.733 2.733 0 015.733 2.25H9.75M3 18.75h12M15 9.75a.375.375 0 10.375.375A.375.375 0 0015 9.75M15 7.5v-3"
    />,
    <path
      className="phone-action-warning_svg__a"
      d="M20.813 10.183a1.774 1.774 0 01-1.587 2.567h-8.452a1.774 1.774 0 01-1.587-2.567l4.226-8.452a1.774 1.774 0 013.174 0z"
    />
  );

export default SvgPhoneActionWarning;
