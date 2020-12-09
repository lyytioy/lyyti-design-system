import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-off_svg__a"
      d="M1.542 1.584L22.458 22.5M5.577 8.729a6.979 6.979 0 00-.556 2.35A3.752 3.752 0 00.5 14.75c0 3.81 4 3.75 4 3.75h10.957M20.687 17.963A4.686 4.686 0 0023.5 13.5a4.99 4.99 0 00-5.18-4.991 6.99 6.99 0 00-9.86-3.048"
    />
  );

export default SvgCloudOff;
