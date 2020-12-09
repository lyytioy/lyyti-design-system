import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneSelfieShoot = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-selfie-shoot_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-selfie-shoot_svg__a"
      d="M17 3.5a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2v-16a2 2 0 012-2"
    />,
    <circle className="phone-selfie-shoot_svg__a" cx={12} cy={5.5} r={1} />,
    <path
      className="phone-selfie-shoot_svg__a"
      d="M12 2.5v-2M10 3.5L8.5 2M14 3.5L15.5 2M15 5.5h2M7 5.5h2M9.5 21.5h5"
    />
  );

export default SvgPhoneSelfieShoot;
