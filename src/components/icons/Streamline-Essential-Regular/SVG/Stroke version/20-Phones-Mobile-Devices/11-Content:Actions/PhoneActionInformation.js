import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-information_svg__a"
      d="M15 15.75v4.768a2.732 2.732 0 01-2.733 2.732H5.733A2.732 2.732 0 013 20.518V4.983A2.733 2.733 0 015.733 2.25H7.5M3 18.75h12"
    />,
    <circle
      className="phone-action-information_svg__a"
      cx={15}
      cy={6.75}
      r={6}
    />,
    <path
      className="phone-action-information_svg__a"
      d="M15 9.75v-3M15 3.75a.375.375 0 10.375.375A.375.375 0 0015 3.75"
    />
  );

export default SvgPhoneActionInformation;
