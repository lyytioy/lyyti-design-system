import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneRetro1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-retro-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-retro-1_svg__a"
      d="M21 2.955a3.186 3.186 0 012.5 3v2a2.015 2.015 0 01-2 2h-3a2.016 2.016 0 01-2-2v-1.5a46.029 46.029 0 00-9 0v1.5a2.016 2.016 0 01-2 2h-3a2.015 2.015 0 01-2-2v-2a3.186 3.186 0 012.5-3 44.979 44.979 0 0118 0zM21.5 20.955a1 1 0 01-1 1h-17a1 1 0 01-1-1v-2a8.023 8.023 0 018-8h3a8.023 8.023 0 018 8zM10.5 8.955v2M13.5 8.955v2"
    />,
    <circle className="phone-retro-1_svg__a" cx={12} cy={16.455} r={3.5} />
  );

export default SvgPhoneRetro1;
