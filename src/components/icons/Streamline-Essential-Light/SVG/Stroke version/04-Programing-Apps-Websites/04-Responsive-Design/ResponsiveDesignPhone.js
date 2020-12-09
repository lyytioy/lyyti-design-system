import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignPhone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-phone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design-phone_svg__a"
      d="M16.5 13.5h4M10.5 19.5v3a1 1 0 01-1 1h-5a1 1 0 01-1-1v-8a1 1 0 011-1H6M3.5 15.5H5M3.5 21.5h7M8.5 12V2A1.5 1.5 0 0110 .5h9A1.5 1.5 0 0120.5 2v14a1.5 1.5 0 01-1.5 1.5h-6.5M14.5 10.5l-7 7"
    />,
    <path
      className="responsive-design-phone_svg__a"
      d="M11.5 10.5h3v3M7.5 14.5v3h3M8.5 3.5h12"
    />
  );

export default SvgResponsiveDesignPhone;
