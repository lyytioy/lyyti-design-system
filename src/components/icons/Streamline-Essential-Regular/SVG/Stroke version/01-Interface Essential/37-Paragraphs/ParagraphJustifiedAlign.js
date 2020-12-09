import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphJustifiedAlign = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-justified-align_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-justified-align_svg__a"
      d="M.75 3.013h22.5M.75 7.513h22.5M.75 12.013h22.5M.75 16.513h22.5M.75 21.013h18"
    />
  );

export default SvgParagraphJustifiedAlign;
