import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneBooth = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-booth_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-booth_svg__a"
      d="M4.5 23.5V4.229M7.5 9.5h9v12h-9zM10.5 9.5v12M13.5 9.5v12M16.5 13.5h-9M16.5 17.5h-9M19.5 23.5V4.229M22.235 2.946A20.747 20.747 0 0012.5.5h-1a20.747 20.747 0 00-9.735 2.446.5.5 0 00-.265.441V4.76a.5.5 0 00.725.447A20.746 20.746 0 0111.5 3h1a20.746 20.746 0 019.275 2.207.5.5 0 00.725-.447V3.387a.5.5 0 00-.265-.441zM1.5 23.5h21M7.5 5.5h9v2h-9z"
    />
  );

export default SvgPhoneBooth;
