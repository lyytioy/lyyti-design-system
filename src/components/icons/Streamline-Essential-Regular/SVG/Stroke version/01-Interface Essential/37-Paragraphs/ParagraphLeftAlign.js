import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphLeftAlign = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-left-align_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-left-align_svg__a"
      d="M.75 2.998h21M.75 7.498h18M.75 11.998h22.5M.75 16.498h18M.75 20.998h21"
    />
  );

export default SvgParagraphLeftAlign;
