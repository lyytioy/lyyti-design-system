import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-home_svg__a"
      d="M14.25 14.25v6.268a2.732 2.732 0 01-2.733 2.732H4.983a2.732 2.732 0 01-2.733-2.732V4.983A2.732 2.732 0 014.983 2.25H9M2.25 18.75h12"
    />,
    <path
      className="phone-action-home_svg__a"
      d="M11.25 3.948v5.8a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-5.8"
    />,
    <path
      className="phone-action-home_svg__a"
      d="M9.75 5.26l4.518-3.953a2.249 2.249 0 012.964 0L21.75 5.26M17.25 11.25h-3v-3a1.5 1.5 0 013 0z"
    />
  );

export default SvgPhoneActionHome;
