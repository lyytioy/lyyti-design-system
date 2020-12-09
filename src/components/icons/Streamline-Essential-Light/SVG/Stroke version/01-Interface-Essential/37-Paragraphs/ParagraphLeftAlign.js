import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgParagraphLeftAlign = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paragraph-left-align_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="paragraph-left-align_svg__a"
      d="M.5 22.498h23M.5 2.498h20M.5 7.498h16M.5 12.498h23M.5 17.498h19"
    />
  );

export default SvgParagraphLeftAlign;
