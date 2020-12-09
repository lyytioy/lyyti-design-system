import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneCharger = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-charger_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-charger_svg__a"
      d="M2.5.5v3M10.5.5v3M4.5 6.5h4M6.5 16.5v3a4 4 0 008 0v-.75a5.251 5.251 0 015.25-5.25h3.75"
    />,
    <path
      className="phone-charger_svg__a"
      d="M4.5 13.158V15.5a1 1 0 001 1h2a1 1 0 001-1v-2.342"
    />,
    <path
      className="phone-charger_svg__a"
      d="M12.5 7.5a6 6 0 01-12 0v-3a1 1 0 011-1h10a1 1 0 011 1z"
    />
  );

export default SvgPhoneCharger;
