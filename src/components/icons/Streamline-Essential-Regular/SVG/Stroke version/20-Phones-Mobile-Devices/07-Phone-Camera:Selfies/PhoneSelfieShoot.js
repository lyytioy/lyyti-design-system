import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneSelfieShoot = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-selfie-shoot_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-selfie-shoot_svg__a"
      d="M14.25 2.25L15 1.5M9.75 2.25L9 1.5M12 1.5V.75M12 4.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="phone-selfie-shoot_svg__a"
      d="M15.75 4.5a3 3 0 013 3v12.75a3 3 0 01-3 3h-7.5a3 3 0 01-3-3V7.5a3 3 0 013-3M12.75 20.25h3"
    />
  );

export default SvgPhoneSelfieShoot;
