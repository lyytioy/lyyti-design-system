import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneSelfieWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-selfie-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-selfie-woman_svg__a"
      d="M16.5 8.25a3 3 0 013 3v12h-15v-12a3 3 0 013-3"
    />,
    <path
      className="phone-selfie-woman_svg__a"
      d="M12 7.5a.375.375 0 11-.375.375A.375.375 0 0112 7.5M9 4.5L6.75 2.25M15 4.5l2.25-2.25M12 3.75v-3M16.224 23.25a4.522 4.522 0 00-8.449 0"
    />,
    <circle className="phone-selfie-woman_svg__a" cx={12} cy={15.75} r={3} />,
    <path
      className="phone-selfie-woman_svg__a"
      d="M9 15.75s0 3.75-2.25 3.75M15 15.75s0 3.75 2.25 3.75"
    />
  );

export default SvgPhoneSelfieWoman;
