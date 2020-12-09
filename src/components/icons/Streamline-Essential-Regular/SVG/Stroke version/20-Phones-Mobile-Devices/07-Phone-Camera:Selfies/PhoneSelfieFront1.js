import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneSelfieFront1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-selfie-front-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="phone-selfie-front-1_svg__a"
      cx={12}
      cy={15.375}
      r={2.625}
    />,
    <path
      className="phone-selfie-front-1_svg__a"
      d="M7.5 23.25a4.5 4.5 0 019 0z"
    />,
    <path
      className="phone-selfie-front-1_svg__a"
      d="M16.5 8.25a3 3 0 013 3v12h-15v-12a3 3 0 013-3"
    />,
    <path
      className="phone-selfie-front-1_svg__a"
      d="M12 7.5a.375.375 0 11-.375.375A.375.375 0 0112 7.5M9 4.5L6.75 2.25M15 4.5l2.25-2.25M12 3.75v-3"
    />
  );

export default SvgPhoneSelfieFront1;
