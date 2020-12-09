import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-circle_svg__a"
      d="M14.137 17.7h.008a3.226 3.226 0 004.014-.441l.452-.451a1.076 1.076 0 000-1.521l-1.9-1.9a1.076 1.076 0 00-1.521 0 1.077 1.077 0 01-1.522 0l-3.042-3.043a1.076 1.076 0 010-1.521 1.076 1.076 0 000-1.521l-1.9-1.9A1.076 1.076 0 007.2 5.4l-.452.451a3.229 3.229 0 00-.44 4.015v.007a29.14 29.14 0 007.829 7.827z"
    />,
    <path
      className="phone-circle_svg__a"
      d="M21 18.764a11.251 11.251 0 10-9 4.5c4.418 0 6.446-2.136 5.215-5.344"
    />
  );

export default SvgPhoneCircle;
