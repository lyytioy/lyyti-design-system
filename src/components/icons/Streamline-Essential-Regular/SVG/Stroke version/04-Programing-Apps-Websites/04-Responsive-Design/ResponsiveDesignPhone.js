import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignPhone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-phone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design-phone_svg__a"
      d="M6.75 11.25h-3a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5v-3M2.25 20.25h7.5M17.25 17.25h3a1.5 1.5 0 001.5-1.5V2.25a1.5 1.5 0 00-1.5-1.5h-7.5a1.5 1.5 0 00-1.5 1.5v1.5M21.75 14.25h-4.5M21.75 3.75h-10.5M18.75 6.75l-9 9"
    />,
    <path
      className="responsive-design-phone_svg__a"
      d="M18.75 11.25v-4.5h-4.5M14.25 15.75h-4.5v-4.5"
    />
  );

export default SvgResponsiveDesignPhone;
