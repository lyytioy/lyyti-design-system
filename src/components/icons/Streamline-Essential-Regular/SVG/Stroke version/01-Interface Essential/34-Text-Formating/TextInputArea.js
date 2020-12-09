import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextInputArea = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-input-area_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="text-input-area_svg__a"
      d="M23.25 15.748a1.5 1.5 0 01-1.5 1.5M21.75 6.748a1.5 1.5 0 011.5 1.5M.75 8.248a1.5 1.5 0 011.5-1.5M2.25 17.248a1.5 1.5 0 01-1.5-1.5M.75 11.248v1.5M23.25 11.248v1.5M5.25 6.748h1.5M9.75 6.748h1.5M17.25 6.748h1.5M5.25 17.248h1.5M9.75 17.248h1.5M17.25 17.248h1.5M14.25 18.748v-13.5M9.75 23.248a4.5 4.5 0 004.5-4.5 4.5 4.5 0 004.5 4.5M9.75.748a4.5 4.5 0 014.5 4.5 4.5 4.5 0 014.5-4.5M11.25 14.248h6"
    />
  );

export default SvgTextInputArea;
