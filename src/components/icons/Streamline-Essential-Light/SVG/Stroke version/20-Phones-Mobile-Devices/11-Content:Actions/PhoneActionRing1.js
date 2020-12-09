import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionRing1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-ring-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-ring-1_svg__a"
      d="M15.5 19.5h-13M9 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <path
      className="phone-action-ring-1_svg__a"
      d="M15.5 15v6.5a2 2 0 01-2 2h-9a2 2 0 01-2-2v-19a2 2 0 012-2h6"
    />,
    <path
      className="phone-action-ring-1_svg__a"
      d="M21 9.5a5.087 5.087 0 01-1.5-3.333V4.5a4 4 0 00-8 0v1.667A5.087 5.087 0 0110 9.5zM14.214 11.5a1.327 1.327 0 002.572 0"
    />
  );

export default SvgPhoneActionRing1;
