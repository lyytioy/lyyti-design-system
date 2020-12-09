import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneSelfieMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-selfie-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-selfie-man_svg__a"
      d="M16.5 8.25a3 3 0 013 3v11.99h-15V11.25a3 3 0 013-3"
    />,
    <path
      className="phone-selfie-man_svg__a"
      d="M12 7.5a.375.375 0 11-.375.375A.375.375 0 0112 7.5M9 4.5L6.75 2.25M15 4.5l2.25-2.25M12 3.75v-3"
    />,
    <circle
      className="phone-selfie-man_svg__a"
      cx={12}
      cy={15.859}
      r={3.109}
    />,
    <path
      className="phone-selfie-man_svg__a"
      d="M16.917 23.245a5.565 5.565 0 00-9.836 0M15.109 15.961a6.229 6.229 0 01-5.935-1.4"
    />
  );

export default SvgPhoneSelfieMan;
