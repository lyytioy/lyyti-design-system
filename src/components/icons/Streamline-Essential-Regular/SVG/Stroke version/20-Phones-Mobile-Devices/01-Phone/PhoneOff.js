import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-off_svg__a"
      d="M14.163 17.7h.007a3.227 3.227 0 004.014-.44l.452-.452a1.076 1.076 0 000-1.521l-1.9-1.9a1.076 1.076 0 00-1.521 0 1.077 1.077 0 01-1.522 0l-3.042-3.043a1.074 1.074 0 010-1.521 1.076 1.076 0 000-1.521l-1.9-1.9a1.076 1.076 0 00-1.521 0l-.452.452a3.226 3.226 0 00-.44 4.014v.007a29.129 29.129 0 007.825 7.825z"
    />,
    <circle className="phone-off_svg__a" cx={12} cy={12.013} r={11.25} />,
    <path className="phone-off_svg__a" d="M19.954 4.059L4.046 19.967" />
  );

export default SvgPhoneOff;
