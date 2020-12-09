import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneSelfieFront = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-selfie-front_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-selfie-front_svg__a"
      d="M17.279 18.75H6.029M12.029 4.5h3.912a2.13 2.13 0 012.088 2.143v8.309M17.981 21.464a2.129 2.129 0 01-2.04 1.786H8.1a2.11 2.11 0 01-2.075-2.143V12M.779 4.5h1.5M8.279 4.5h-1.5M4.529 6.75v1.5M4.529.75v1.5"
    />,
    <path
      className="phone-selfie-front_svg__a"
      d="M20.984 23.249l-2.96-1.749a1.749 1.749 0 01-.745-1.67V18l-1.053-1.106a1.326 1.326 0 01.2-2.041 1.327 1.327 0 011.673.166l1.561 1.561M18.029 7.941l3.662 5.136a4.5 4.5 0 01.838 2.615v2.177a2.362 2.362 0 00.692 1.67"
    />,
    <circle
      className="phone-selfie-front_svg__a"
      cx={12.087}
      cy={10.875}
      r={2.625}
    />,
    <path
      className="phone-selfie-front_svg__a"
      d="M17.279 18.75H7.587a4.5 4.5 0 014.5-4.5"
    />
  );

export default SvgPhoneSelfieFront;
