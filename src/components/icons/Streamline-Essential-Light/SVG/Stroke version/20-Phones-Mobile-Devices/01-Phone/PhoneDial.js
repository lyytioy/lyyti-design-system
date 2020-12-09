import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneDial = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-dial_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-dial_svg__a"
      d="M21 1.455a3.186 3.186 0 012.5 3v2a2.015 2.015 0 01-2 2h-3a2.016 2.016 0 01-2-2v-1.5a46.029 46.029 0 00-9 0v1.5a2.016 2.016 0 01-2 2h-3a2.015 2.015 0 01-2-2v-2a3.186 3.186 0 012.5-3 44.979 44.979 0 0118 0zM7.5 12.455a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM13.5 12.455a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zM19.5 12.455a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zM7.5 17.455a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zM13.5 17.455a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zM19.5 17.455a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zM7.5 22.455a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zM13.5 22.455a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zM19.5 22.455a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1z"
    />
  );

export default SvgPhoneDial;
