import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsRinging = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-ringing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-ringing_svg__a"
      d="M10.852 23.316c-2.4-2.406-1.549-4.282-.246-5.585l.841-.841a2.144 2.144 0 013.032 0l3.639 3.64a1.252 1.252 0 01-.413 2.046 12.5 12.5 0 01-16.3-16.3 1.252 1.252 0 012.046-.413L7.093 9.5a2.144 2.144 0 010 3.032l-.841.841c-1.3 1.3-3.179 2.154-5.585-.246M11.986.5a11.5 11.5 0 0111.5 11.5M11.986 4.5a7.5 7.5 0 017.5 7.5M11.986 8.5a3.5 3.5 0 013.5 3.5"
    />
  );

export default SvgPhoneActionsRinging;
