import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneSelfieWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-selfie-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-selfie-woman_svg__a"
      d="M4 23.491V5.5a2 2 0 012-2M18 3.5a2 2 0 012 2v17.991M20 8.5H4"
    />,
    <circle className="phone-selfie-woman_svg__a" cx={12} cy={5.5} r={1} />,
    <path
      className="phone-selfie-woman_svg__a"
      d="M12 2.5v-2M10 3.5L8.5 2M14 3.5L15.5 2M15 5.5h2M7 5.5h2M7 23.5a5 5 0 0110 0zM15.642 17.144a3.939 3.939 0 01-.573-2.181v-.892a3.069 3.069 0 10-6.138 0v.892a3.939 3.939 0 01-.573 2.181"
    />,
    <path
      className="phone-selfie-woman_svg__a"
      d="M8.931 14.578A4.065 4.065 0 0012 13.171a4.065 4.065 0 003.069 1.407M14.705 14.561a2.708 2.708 0 01-5.41 0"
    />
  );

export default SvgPhoneSelfieWoman;
