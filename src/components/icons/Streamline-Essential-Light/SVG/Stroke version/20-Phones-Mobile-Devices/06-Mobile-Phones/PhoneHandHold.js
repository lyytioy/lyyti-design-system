import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneHandHold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-hand-hold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-hand-hold_svg__a"
      d="M5.24 11.33a.249.249 0 11-.306-.177.25.25 0 01.306.177M19.136 13.287l2.26-.608a1 1 0 00.7-1.226l-2.333-8.691a1 1 0 00-1.225-.7l-.4.108"
    />,
    <path
      className="phone-hand-hold_svg__a"
      d="M5.136 5.662L2.6 6.343a1 1 0 00-.7 1.226l2.337 8.691a1 1 0 001.225.7l9.338-2.506M13.136 7a1.5 1.5 0 01-3 0V3a1.5 1.5 0 013 0z"
    />,
    <path
      className="phone-hand-hold_svg__a"
      d="M10.136 8a1.5 1.5 0 01-3 0V4a1.5 1.5 0 013 0zM16.136 6a1.5 1.5 0 01-3 0V2a1.5 1.5 0 013 0zM14.136 16.5a3.5 3.5 0 012-3.163M7.136 16.515V17a2 2 0 00.8 1.6l.4.3a2 2 0 01.8 1.6v3"
    />,
    <path
      className="phone-hand-hold_svg__a"
      d="M16.136 13.337V10a1.5 1.5 0 013 0v5.5a3 3 0 01-1.8 2.75 2 2 0 00-1.2 1.834V23.5"
    />
  );

export default SvgPhoneHandHold;
