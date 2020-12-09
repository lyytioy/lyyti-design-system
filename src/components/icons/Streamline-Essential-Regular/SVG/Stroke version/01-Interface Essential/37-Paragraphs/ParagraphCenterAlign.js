import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphCenterAlign = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-center-align_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-center-align_svg__a"
      d="M2.241 2.998h19.5M5.241 7.498h13.5M.741 11.998h22.5M5.241 16.498h13.5M2.241 20.998h19.5"
    />
  );

export default SvgParagraphCenterAlign;
