import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneRetro = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-retro_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-retro_svg__a"
      d="M21 1.455a3.186 3.186 0 012.5 3v2a2.015 2.015 0 01-2 2h-3a2.016 2.016 0 01-2-2v-1.5a46.029 46.029 0 00-9 0v1.5a2.016 2.016 0 01-2 2h-3a2.015 2.015 0 01-2-2v-2a3.186 3.186 0 012.5-3 44.979 44.979 0 0118 0zM20.836 10.458a9.5 9.5 0 11-17.67 0"
    />,
    <circle className="phone-retro_svg__a" cx={12} cy={13.955} r={2.5} />,
    <path
      className="phone-retro_svg__a"
      d="M19 21.455l-3.25-3.25M12 7.705a.25.25 0 11-.25.25.25.25 0 01.25-.25M16.5 9.705a.25.25 0 11-.25.25.25.25 0 01.25-.25M18 13.705a.25.25 0 11-.25.25.25.25 0 01.25-.25M12 19.7a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.5 17.7a.25.25 0 11-.25.25.25.25 0 01.25-.25M6 13.705a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.5 9.705a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgPhoneRetro;
