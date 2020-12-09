import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneCameraShoot = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-camera-shoot_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-camera-shoot_svg__a"
      d="M18 2.25a3 3 0 013 3v15a3 3 0 01-3 3h-7.5a3 3 0 01-3-3V10.5M12.75 20.25h3M10.5.75V3M5.288 2.25l1.462 1.5M3 6.75h2.25M15.712 2.25l-1.462 1.5M18 6.75h-2.25M9 6.375a.375.375 0 10.375.375A.375.375 0 009 6.375M12 6.375"
    />,
    <path
      className="phone-camera-shoot_svg__a"
      d="M12 6.375a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgPhoneCameraShoot;
