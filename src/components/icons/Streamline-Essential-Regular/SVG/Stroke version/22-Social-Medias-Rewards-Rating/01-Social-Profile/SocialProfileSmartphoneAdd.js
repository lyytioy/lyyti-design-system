import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSocialProfileSmartphoneAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".social-profile-smartphone-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="social-profile-smartphone-add_svg__a"
      d="M19.5 13.5v6.75a3 3 0 01-3 3h-9a3 3 0 01-3-3V3.75a3 3 0 013-3h9a3 3 0 013 3M4.5 18.75h15"
    />,
    <circle
      className="social-profile-smartphone-add_svg__a"
      cx={11.25}
      cy={10.125}
      r={2.625}
    />,
    <path
      className="social-profile-smartphone-add_svg__a"
      d="M15 15.75a4.25 4.25 0 00-7.5 0M18 7.5v3M16.5 9h3"
    />
  );

export default SvgSocialProfileSmartphoneAdd;
