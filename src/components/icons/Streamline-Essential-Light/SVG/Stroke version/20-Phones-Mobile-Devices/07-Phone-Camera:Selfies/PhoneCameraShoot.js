import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneCameraShoot = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-camera-shoot_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-camera-shoot_svg__a"
      d="M18.25 3.5a2 2 0 012 2v16a2 2 0 01-2 2h-11a2 2 0 01-2-2v-14"
    />,
    <circle className="phone-camera-shoot_svg__a" cx={8.25} cy={5.5} r={1} />,
    <circle className="phone-camera-shoot_svg__a" cx={12.25} cy={5.5} r={1} />,
    <path
      className="phone-camera-shoot_svg__a"
      d="M10.25 21.5h5M10.25 2.5v-2M13.75 3l1-1M6.75 3l-1-1M3.75 5.5h1.5M15.25 5.5h1.5"
    />
  );

export default SvgPhoneCameraShoot;
