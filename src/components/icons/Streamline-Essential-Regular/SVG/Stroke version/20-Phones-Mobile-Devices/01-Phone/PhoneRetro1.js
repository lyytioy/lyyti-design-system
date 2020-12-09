import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneRetro1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-retro-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-retro-1_svg__a"
      d="M4.285 1.49h-.011A4.5 4.5 0 00.75 5.885v.89a1.5 1.5 0 001.5 1.5H6a1.5 1.5 0 001.5-1.5 1.5 1.5 0 011.5-1.5h6a1.5 1.5 0 011.5 1.5 1.5 1.5 0 001.5 1.5h3.75a1.5 1.5 0 001.5-1.5v-.89a4.5 4.5 0 00-3.524-4.393h-.011a40.593 40.593 0 00-15.43-.002zM12.305 11.275H11.7a9 9 0 00-8.931 7.884l-.093.744a3 3 0 002.977 3.372h12.7a3 3 0 002.975-3.375l-.093-.744a9 9 0 00-8.93-7.881zM9.75 11.487V9.025M14.25 11.487V9.025"
    />,
    <circle className="phone-retro-1_svg__a" cx={12} cy={17.275} r={3} />
  );

export default SvgPhoneRetro1;
