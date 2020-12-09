import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphJustifiedAlign = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-justified-align_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-justified-align_svg__a"
      d="M.5 22.498h17M.5 2.498h23M.5 7.498h23M.5 12.498h23M.5 17.498h23"
    />
  );

export default SvgParagraphJustifiedAlign;
