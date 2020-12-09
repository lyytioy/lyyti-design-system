import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpellingCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".spelling-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="spelling-check_svg__a"
      d="M1.5 15.5L6.531 1.778a.5.5 0 01.938 0L12.5 15.5M2.967 11.498h8.066M22.5 10l-9.314 13.04a1 1 0 01-1.521.125L7.5 19"
    />
  );

export default SvgSpellingCheck;
