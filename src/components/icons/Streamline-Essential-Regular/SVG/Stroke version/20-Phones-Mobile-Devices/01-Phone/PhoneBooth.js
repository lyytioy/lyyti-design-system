import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneBooth = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-booth_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-booth_svg__a"
      d="M5.25 5.263h13.5v18H5.25zM3.75 23.263h16.5M5.634 5.262a6.753 6.753 0 0112.734.008M5.25 8.263h13.5M5.25 12.763h13.5M5.25 17.263h13.5M9.75 8.263v9M14.25 8.263v9"
    />
  );

export default SvgPhoneBooth;
